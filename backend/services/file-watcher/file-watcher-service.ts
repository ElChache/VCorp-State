import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs/promises';
import { DatabaseService } from '../database.js';
import { RealTimeEventService } from '../real-time-events.js';
import { FileWatcherConfig, FileEvent } from './types.js';
import { PathResolver } from './path-resolver.js';
import { DatabaseOperations } from './database-operations.js';
import { FileEventHandler } from './file-event-handler.js';

export class FileWatcherService {
  private watchers: Map<string, chokidar.FSWatcher> = new Map();
  private projectConfigs: Map<number, FileWatcherConfig> = new Map();
  
  // Modular components
  private pathResolver: PathResolver;
  private dbOps: DatabaseOperations;
  private eventHandler: FileEventHandler;

  constructor(db: DatabaseService, realTimeEvents: RealTimeEventService) {
    this.pathResolver = new PathResolver();
    this.dbOps = new DatabaseOperations(db);
    this.eventHandler = new FileEventHandler(this.pathResolver, this.dbOps);
  }

  /**
   * Start watching a project's agent workspaces and initial-docs
   */
  async startWatching(config: FileWatcherConfig): Promise<void> {
    const { projectId, projectPath, agentWorkspacesPath } = config;
    
    // Default paths
    const workspacesPath = agentWorkspacesPath || path.join(projectPath, 'agent_workspaces');
    const initialDocsPath = path.join(projectPath, 'initial-docs');
    
    // Ensure workspaces directory exists
    await this.ensureWorkspacesDirectory(workspacesPath);

    // Store project config
    this.projectConfigs.set(projectId, { ...config, agentWorkspacesPath: workspacesPath });

    // Stop existing watcher for this project if any
    await this.stopWatching(projectId);

    console.log(`👁️  Starting file watcher for project ${projectId}`);
    console.log(`  - Agent workspaces: ${workspacesPath}`);
    console.log(`  - Initial docs: ${initialDocsPath}`);

    // Create watchers for both directories
    const workspacesWatcher = this.createWatcher(workspacesPath);
    const initialDocsWatcher = this.createWatcher(initialDocsPath);

    // Setup events for both watchers
    this.setupWatcherEvents(workspacesWatcher, projectId, workspacesPath, initialDocsPath);
    this.setupWatcherEvents(initialDocsWatcher, projectId, workspacesPath, initialDocsPath);

    // Store watchers
    this.watchers.set(`project-${projectId}-workspaces`, workspacesWatcher);
    this.watchers.set(`project-${projectId}-initial-docs`, initialDocsWatcher);
  }

  /**
   * Stop watching a project
   */
  async stopWatching(projectId: number): Promise<void> {
    const workspacesKey = `project-${projectId}-workspaces`;
    const initialDocsKey = `project-${projectId}-initial-docs`;
    
    const workspacesWatcher = this.watchers.get(workspacesKey);
    const initialDocsWatcher = this.watchers.get(initialDocsKey);
    
    if (workspacesWatcher) {
      await workspacesWatcher.close();
      this.watchers.delete(workspacesKey);
    }
    
    if (initialDocsWatcher) {
      await initialDocsWatcher.close();
      this.watchers.delete(initialDocsKey);
    }
    
    if (workspacesWatcher || initialDocsWatcher) {
      this.projectConfigs.delete(projectId);
      console.log(`🛑 Stopped file watchers for project ${projectId}`);
    }
  }

  /**
   * Get watching status for a project
   */
  isWatching(projectId: number): boolean {
    return this.watchers.has(`project-${projectId}-workspaces`) || 
           this.watchers.has(`project-${projectId}-initial-docs`);
  }

  /**
   * Get all watched projects
   */
  getWatchedProjects(): number[] {
    return Array.from(this.projectConfigs.keys());
  }

  /**
   * Clean up all watchers
   */
  async close(): Promise<void> {
    console.log('🛑 Closing all file watchers...');
    
    for (const [key, watcher] of this.watchers.entries()) {
      await watcher.close();
      console.log(`✅ Closed watcher: ${key}`);
    }
    
    this.watchers.clear();
    this.projectConfigs.clear();
  }

  // Private helper methods

  private async ensureWorkspacesDirectory(workspacesPath: string): Promise<void> {
    try {
      await fs.access(workspacesPath);
    } catch (error) {
      console.log(`📁 Agent workspaces directory does not exist yet: ${workspacesPath}`);
      try {
        await fs.mkdir(workspacesPath, { recursive: true });
        console.log(`📁 Created agent workspaces directory: ${workspacesPath}`);
      } catch (createError) {
        console.error(`❌ Failed to create workspaces directory: ${createError}`);
        throw createError;
      }
    }
  }

  private createWatcher(workspacesPath: string): chokidar.FSWatcher {
    return chokidar.watch(workspacesPath, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      depth: 10, // watch nested folders
      ignoreInitial: false // process existing files/folders
    });
  }

  private setupWatcherEvents(watcher: chokidar.FSWatcher, projectId: number, workspacesPath: string, initialDocsPath: string): void {
    // Handle folder creation (agent workspace folders)
    watcher.on('addDir', async (dirPath: string) => {
      const event: FileEvent = {
        type: 'addDir',
        path: dirPath,
        projectId,
        workspacesPath,
        initialDocsPath
      };
      await this.eventHandler.handleDirectoryAdded(event);
    });

    // Handle folder rename (via unlink + add)
    watcher.on('unlinkDir', async (dirPath: string) => {
      const event: FileEvent = {
        type: 'unlinkDir',
        path: dirPath,
        projectId,
        workspacesPath,
        initialDocsPath
      };
      await this.eventHandler.handleDirectoryRemoved(event);
    });

    // Handle file creation
    watcher.on('add', async (filePath: string) => {
      const event: FileEvent = {
        type: 'add',
        path: filePath,
        projectId,
        workspacesPath,
        initialDocsPath
      };
      await this.eventHandler.handleFileAdded(event);
    });

    // Handle file removal
    watcher.on('unlink', async (filePath: string) => {
      const event: FileEvent = {
        type: 'unlink',
        path: filePath,
        projectId,
        workspacesPath,
        initialDocsPath
      };
      await this.eventHandler.handleFileRemoved(event);
    });

    // Handle watcher errors
    watcher.on('error', (error) => {
      console.error(`❌ File watcher error for project ${projectId}:`, error);
    });

    watcher.on('ready', () => {
      console.log(`✅ File watcher ready for project ${projectId}`);
    });
  }
}