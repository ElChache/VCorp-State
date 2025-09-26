import path from 'path';
import fs from 'fs/promises';
import { DatabaseService } from '../database.js';

export class DatabaseOperations {
  private db: DatabaseService;

  constructor(db: DatabaseService) {
    this.db = db;
  }

  /**
   * Find document collection by slug
   */
  async findDocumentCollectionBySlug(projectId: number, slug: string) {
    try {
      const collection = await this.db.transaction(async (prisma) => {
        return await prisma.documentCollection.findFirst({
          where: {
            project_id: projectId,
            slug: slug
          }
        });
      });
      
      return collection;
    } catch (error) {
      console.error(`❌ Error finding document collection by slug: ${slug}`, error);
      return null;
    }
  }

  /**
   * Find document by slug
   */
  async findDocumentBySlug(projectId: number, slug: string) {
    try {
      const document = await this.db.transaction(async (prisma) => {
        return await prisma.document.findFirst({
          where: {
            project_id: projectId,
            slug: slug
          }
        });
      });
      
      return document;
    } catch (error) {
      console.error(`❌ Error finding document by slug: ${slug}`, error);
      return null;
    }
  }

  /**
   * Create or update document collection
   */
  async createOrUpdateDocumentCollection(projectId: number, slug: string, name: string, folderPath: string, documentType: string = 'agent_workspace') {
    return await this.db.transaction(async (prisma) => {
      const existing = await prisma.documentCollection.findFirst({
        where: { project_id: projectId, slug: slug }
      });

      if (existing) {
        // Update existing collection (no path field to update for collections)
        return existing;
      } else {
        // Create new collection
        const description = documentType === 'initial_docs' 
          ? `Auto-generated from initial-docs folder: ${folderPath}`
          : `Auto-generated from agent workspace folder: ${folderPath}`;
          
        return await prisma.documentCollection.create({
          data: {
            project_id: projectId,
            slug: slug,
            name: name,
            description: description,
            document_type: documentType
          }
        });
      }
    });
  }

  /**
   * Create or update document
   */
  async createOrUpdateDocument(
    projectId: number, 
    collectionId: number, 
    slug: string, 
    name: string, 
    content: string,
    filePath: string
  ) {
    return await this.db.transaction(async (prisma) => {
      const existing = await prisma.document.findFirst({
        where: { project_id: projectId, slug: slug }
      });

      if (existing) {
        // Update existing document with new file path and content
        return await prisma.document.update({
          where: { id: existing.id },
          data: {
            file_path: filePath,
            content: content,
            document_collection_id: collectionId,
            last_updated_at: new Date()
          }
        });
      } else {
        // Create new document
        return await prisma.document.create({
          data: {
            project_id: projectId,
            document_collection_id: collectionId,
            slug: slug,
            name: name,
            content: content,
            file_path: filePath,
            document_type: 'file',
            status: 'ready'
          }
        });
      }
    });
  }

  /**
   * Read file content safely
   */
  async readFileContent(filePath: string): Promise<string> {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      return content;
    } catch (error) {
      console.error(`❌ Error reading file: ${filePath}`, error);
      return `Error reading file: ${error}`;
    }
  }
}