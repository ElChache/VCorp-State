import path from 'path';
import { PathResolver } from './path-resolver.js';
import { DatabaseOperations } from './database-operations.js';
import { FileEvent } from './types.js';

export class FileEventHandler {
  private pathResolver: PathResolver;
  private dbOps: DatabaseOperations;

  constructor(pathResolver: PathResolver, dbOps: DatabaseOperations) {
    this.pathResolver = pathResolver;
    this.dbOps = dbOps;
  }

  /**
   * Handle directory addition (agent workspace folder)
   */
  async handleDirectoryAdded(event: FileEvent): Promise<void> {
    try {
      const { path: dirPath, projectId, workspacesPath } = event;

      // Skip if not an agent workspace folder
      if (!this.pathResolver.isAgentWorkspaceFolder(workspacesPath, dirPath)) {
        return;
      }

      const parsedPath = this.pathResolver.parseAgentWorkspacePath(workspacesPath, dirPath);
      if (!parsedPath) {
        return;
      }

      const { agentId, folderName } = parsedPath;
      const slug = this.pathResolver.sanitizeSlug(folderName);

      console.log(`📂 New agent workspace folder detected: ${agentId}/${folderName}`);

      // Check if document collection already exists
      const existingCollection = await this.dbOps.findDocumentCollectionBySlug(projectId, slug);
      
      if (!existingCollection) {
        // Create new document collection
        await this.dbOps.createDocumentCollection(projectId, slug, folderName, dirPath);
        console.log(`✅ Created document collection: ${slug}`);
      }
    } catch (error) {
      console.error(`❌ Error handling directory addition: ${event.path}`, error);
    }
  }

  /**
   * Handle directory removal (for rename detection)
   */
  async handleDirectoryRemoved(event: FileEvent): Promise<void> {
    try {
      const { path: dirPath, workspacesPath } = event;

      if (!this.pathResolver.isAgentWorkspaceFolder(workspacesPath, dirPath)) {
        return;
      }

      const parsedPath = this.pathResolver.parseAgentWorkspacePath(workspacesPath, dirPath);
      if (!parsedPath) {
        return;
      }

      const { folderName } = parsedPath;
      console.log(`📂 Agent workspace folder removed: ${folderName}`);

      // Note: We don't automatically delete document collections on folder removal
      // as they might contain important data. This should be handled manually or
      // via a separate cleanup process.
    } catch (error) {
      console.error(`❌ Error handling directory removal: ${event.path}`, error);
    }
  }

  /**
   * Handle file addition
   */
  async handleFileAdded(event: FileEvent): Promise<void> {
    try {
      const { path: filePath, projectId, workspacesPath, initialDocsPath } = event;

      // Check if this is an initial-docs file
      if (initialDocsPath && this.pathResolver.isInitialDocsFile(initialDocsPath, filePath)) {
        await this.handleInitialDocsFileAdded(event);
        return;
      }

      // Skip if not a file under agent workspace folder
      if (!this.pathResolver.isAgentWorkspaceFile(workspacesPath, filePath)) {
        return;
      }

      const parsedPath = this.pathResolver.parseAgentWorkspacePath(workspacesPath, filePath);
      if (!parsedPath || !parsedPath.fileName) {
        return;
      }

      const { agentId, folderName, fileName } = parsedPath;
      const folderSlug = this.pathResolver.sanitizeSlug(folderName);
      const fileSlug = this.pathResolver.sanitizeSlug(path.parse(fileName).name);

      console.log(`📄 New file detected: ${agentId}/${folderName}/${fileName}`);

      // Ensure document collection exists
      let collection = await this.dbOps.findDocumentCollectionBySlug(projectId, folderSlug);
      
      if (!collection) {
        const folderPath = path.join(workspacesPath, agentId, folderName);
        collection = await this.dbOps.createOrUpdateDocumentCollection(projectId, folderSlug, folderName, folderPath, 'agent_workspace');
        console.log(`✅ Created document collection for new file: ${folderSlug}`);
      }

      // Read file content
      const content = await this.dbOps.readFileContent(filePath);
      
      // Create or update document
      await this.dbOps.createOrUpdateDocument(projectId, collection.id, fileSlug, fileName, content, filePath);
      console.log(`✅ Created/updated document: ${fileSlug}`);

    } catch (error) {
      console.error(`❌ Error handling file addition: ${event.path}`, error);
    }
  }

  /**
   * Handle initial-docs file addition
   */
  private async handleInitialDocsFileAdded(event: FileEvent): Promise<void> {
    const { path: filePath, projectId, initialDocsPath } = event;
    
    if (!initialDocsPath) {
      return;
    }

    const parsedPath = this.pathResolver.parseInitialDocsPath(initialDocsPath, filePath);
    if (!parsedPath) {
      return;
    }

    const { fileName } = parsedPath;
    // Remove .md extension for slug
    const fileSlug = this.pathResolver.sanitizeSlug(path.parse(fileName).name);

    console.log(`📄 New initial-docs file detected: ${fileName}`);

    // Ensure initial-docs document collection exists
    let collection = await this.dbOps.findDocumentCollectionBySlug(projectId, 'initial-docs');
    
    if (!collection) {
      collection = await this.dbOps.createOrUpdateDocumentCollection(
        projectId, 
        'initial-docs', 
        'initial-docs', 
        initialDocsPath, 
        'initial_docs'
      );
      console.log(`✅ Created initial-docs document collection`);
    }

    // Read file content
    const content = await this.dbOps.readFileContent(filePath);
    
    // Create or update document
    await this.dbOps.createOrUpdateDocument(projectId, collection.id, fileSlug, fileName, content, filePath);
    console.log(`✅ Created/updated initial-docs document: ${fileSlug}`);
  }

  /**
   * Handle file removal
   */
  async handleFileRemoved(event: FileEvent): Promise<void> {
    try {
      const { path: filePath } = event;
      const fileName = path.basename(filePath);

      console.log(`📄 File removed: ${fileName}`);

      // Note: We don't automatically delete documents on file removal
      // as they might contain important processing history. This should be 
      // handled manually or via a separate cleanup process.
    } catch (error) {
      console.error(`❌ Error handling file removal: ${event.path}`, error);
    }
  }
}