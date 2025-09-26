import fs from 'fs/promises';
import path from 'path';
import { DatabaseAgent } from '../types/index.js';

export interface AgentWorkspaceConfig {
  projectId: number;
  projectPath: string;
  vcorpRootPath: string;
}

export interface WorkspaceCreationResult {
  success: boolean;
  workspacePath: string;
  agentId: number;
  error?: string;
}

/**
 * Service responsible for managing agent workspaces
 * Creates and manages individual agent working directories with proper tooling
 */
export class AgentWorkspaceService {
  private readonly config: AgentWorkspaceConfig;

  constructor(config: AgentWorkspaceConfig) {
    this.config = config;
  }

  /**
   * Create a complete workspace for an agent
   * @param agent - The database agent record
   * @returns Promise<WorkspaceCreationResult>
   */
  async createAgentWorkspace(agent: DatabaseAgent): Promise<WorkspaceCreationResult> {
    const agentId = agent.id;
    
    try {
      console.log(`🏗️  Creating workspace for agent ${agentId} (${agent.slug})`);

      // 1. Create agent workspace directory
      const workspacePath = path.join(
        this.config.projectPath,
        'agents_workspaces',
        agentId.toString()
      );

      await this.ensureDirectoryExists(workspacePath, `agent ${agentId} workspace`);

      // 2. Create bin directory
      const binPath = path.join(workspacePath, 'bin');
      await this.ensureDirectoryExists(binPath, `agent ${agentId} bin directory`);

      // 3. Create vcorp wrapper script
      await this.createVcorpWrapper(binPath, agentId, this.config.projectId);

      console.log(`✅ Successfully created workspace for agent ${agentId} at: ${workspacePath}`);

      return {
        success: true,
        workspacePath,
        agentId
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`❌ Failed to create workspace for agent ${agentId}:`, errorMessage);

      return {
        success: false,
        workspacePath: '',
        agentId,
        error: errorMessage
      };
    }
  }

  /**
   * Create multiple agent workspaces in batch
   * @param agents - Array of database agent records
   * @returns Promise<WorkspaceCreationResult[]>
   */
  async createMultipleWorkspaces(agents: DatabaseAgent[]): Promise<WorkspaceCreationResult[]> {
    console.log(`🏗️  Creating workspaces for ${agents.length} agents`);

    const results = await Promise.allSettled(
      agents.map(agent => this.createAgentWorkspace(agent))
    );

    return results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value;
      } else {
        const agent = agents[index];
        const errorMessage = result.reason instanceof Error ? result.reason.message : 'Unknown error';
        console.error(`❌ Failed to create workspace for agent ${agent.id}:`, errorMessage);
        
        return {
          success: false,
          workspacePath: '',
          agentId: agent.id,
          error: errorMessage
        };
      }
    });
  }

  /**
   * Create the vcorp wrapper script for an agent
   * @param binPath - Path to the agent's bin directory
   * @param agentId - Database ID of the agent
   * @param projectId - Project ID
   */
  private async createVcorpWrapper(binPath: string, agentId: number, projectId: number): Promise<void> {
    const vcorpScriptPath = path.join(binPath, 'vcorp');
    const vcorpAdminPath = path.join(this.config.vcorpRootPath, 'bin', 'vcorp-admin');

    const scriptContent = this.generateVcorpWrapperScript(vcorpAdminPath, agentId, projectId);

    await fs.writeFile(vcorpScriptPath, scriptContent, { mode: 0o755 });
    console.log(`📝 Created vcorp wrapper for agent ${agentId}: ${vcorpScriptPath}`);
  }

  /**
   * Generate the content for the vcorp wrapper script
   * @param vcorpAdminPath - Path to the main vcorp-admin binary
   * @param agentId - Database ID of the agent  
   * @param projectId - Project ID
   * @returns The script content as a string
   */
  private generateVcorpWrapperScript(vcorpAdminPath: string, agentId: number, projectId: number): string {
    return `#!/usr/bin/env node

// VCorp Agent Wrapper Script
// Auto-generated for Agent ID: ${agentId}
// Project ID: ${projectId}
// Generated at: ${new Date().toISOString()}

const { spawn } = require('child_process');
const path = require('path');

// Configuration
const VCORP_ADMIN_PATH = '${vcorpAdminPath}';
const AGENT_ID = '${agentId}';
const PROJECT_ID = '${projectId}';

// Execute vcorp-admin with agent context
const args = ['--agent-id=' + AGENT_ID];
const child = spawn('node', [VCORP_ADMIN_PATH, ...args], {
  stdio: 'inherit',
  env: {
    ...process.env,
    VCORP_AGENT_ID: AGENT_ID,
    VCORP_PROJECT_ID: PROJECT_ID
  }
});

// Handle exit codes
child.on('close', (code) => {
  process.exit(code || 0);
});

child.on('error', (error) => {
  console.error('❌ Error executing vcorp-admin:', error.message);
  process.exit(1);
});
`;
  }

  /**
   * Ensure a directory exists, creating it if necessary
   * @param dirPath - Directory path to create
   * @param description - Human-readable description for logging
   */
  private async ensureDirectoryExists(dirPath: string, description: string): Promise<void> {
    try {
      await fs.access(dirPath);
      console.log(`📁 Directory already exists: ${description} (${dirPath})`);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
      console.log(`📁 Created directory: ${description} (${dirPath})`);
    }
  }

  /**
   * Get the workspace path for a specific agent
   * @param agentId - Database ID of the agent
   * @returns The full workspace path
   */
  getAgentWorkspacePath(agentId: number): string {
    return path.join(
      this.config.projectPath,
      'agents_workspaces',
      agentId.toString()
    );
  }

  /**
   * Check if an agent workspace exists
   * @param agentId - Database ID of the agent
   * @returns Promise<boolean>
   */
  async workspaceExists(agentId: number): Promise<boolean> {
    const workspacePath = this.getAgentWorkspacePath(agentId);
    try {
      await fs.access(workspacePath);
      return true;
    } catch {
      return false;
    }
  }
}