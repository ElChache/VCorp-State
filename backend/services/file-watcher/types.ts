export interface FileWatcherConfig {
  projectId: number;
  projectPath: string;
  agentWorkspacesPath?: string;
}

export interface AgentWorkspacePath {
  agentId: string;
  folderName: string;
  fileName?: string;
  fullPath: string;
  relativePath: string;
}

export interface InitialDocsPath {
  fileName: string;
  fullPath: string;
  relativePath: string;
}

export interface FileEvent {
  type: 'addDir' | 'unlinkDir' | 'add' | 'unlink';
  path: string;
  projectId: number;
  workspacesPath: string;
  initialDocsPath?: string;
}