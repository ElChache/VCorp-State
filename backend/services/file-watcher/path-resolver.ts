import path from 'path';
import { AgentWorkspacePath, InitialDocsPath } from './types.js';

export class PathResolver {
  /**
   * Parse agent workspace path into components
   */
  parseAgentWorkspacePath(workspacesPath: string, filePath: string): AgentWorkspacePath | null {
    const relativePath = path.relative(workspacesPath, filePath);
    const pathParts = relativePath.split(path.sep);
    
    // Must be at least agent_workspaces/{agent_id}/{folder}
    if (pathParts.length < 2) {
      return null;
    }

    const [agentId, folderName, ...fileParts] = pathParts;
    const fileName = fileParts.length > 0 ? path.basename(filePath) : undefined;

    return {
      agentId,
      folderName,
      fileName,
      fullPath: filePath,
      relativePath
    };
  }

  /**
   * Check if path is a direct folder under agent workspace
   */
  isAgentWorkspaceFolder(workspacesPath: string, dirPath: string): boolean {
    if (dirPath === workspacesPath) {
      return false;
    }

    const relativePath = path.relative(workspacesPath, dirPath);
    const pathParts = relativePath.split(path.sep);
    
    return pathParts.length === 2; // agent_workspaces/{agent_id}/{folder}
  }

  /**
   * Check if path is a file under an agent workspace folder
   */
  isAgentWorkspaceFile(workspacesPath: string, filePath: string): boolean {
    const relativePath = path.relative(workspacesPath, filePath);
    const pathParts = relativePath.split(path.sep);
    
    return pathParts.length >= 3; // agent_workspaces/{agent_id}/{folder}/file
  }

  /**
   * Parse initial-docs path into components
   */
  parseInitialDocsPath(initialDocsPath: string, filePath: string): InitialDocsPath | null {
    const relativePath = path.relative(initialDocsPath, filePath);
    
    // Must be a direct file under initial-docs (no subdirectories)
    if (relativePath.includes(path.sep)) {
      return null;
    }

    // Must be a .md file
    if (!filePath.endsWith('.md')) {
      return null;
    }

    const fileName = path.basename(filePath);

    return {
      fileName,
      fullPath: filePath,
      relativePath
    };
  }

  /**
   * Check if path is a file under initial-docs folder
   */
  isInitialDocsFile(initialDocsPath: string, filePath: string): boolean {
    const relativePath = path.relative(initialDocsPath, filePath);
    
    // Must be a direct file under initial-docs (no subdirectories)
    if (relativePath.includes(path.sep)) {
      return false;
    }

    // Must be a .md file
    return filePath.endsWith('.md');
  }

  /**
   * Sanitize string to be used as a database slug
   */
  sanitizeSlug(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 90); // Keep within DB limits
  }
}