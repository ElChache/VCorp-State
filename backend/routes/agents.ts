import { Router } from 'express';
import { DatabaseService } from '../services/database.js';
import { AgentWorkspaceService } from '../services/agent-workspace.js';
import { generateUniqueAgentSlug } from '../data/agent-names.js';
import path from 'path';

const router = Router();
const db = new DatabaseService();

/**
 * POST /api/agents/launch
 * Launch agents for a project
 * 
 * Request body:
 * {
 *   "projectId": number,
 *   "role": string,       // Role short_name (e.g., "fe", "be", "ai") 
 *   "count": number       // Number of agents to create
 * }
 */
router.post('/launch', async (req, res) => {
  try {
    const { projectId, role, count } = req.body;

    // Validation
    if (!projectId || typeof projectId !== 'number') {
      return res.status(400).json({
        error: 'projectId is required and must be a number'
      });
    }

    if (!role || typeof role !== 'string') {
      return res.status(400).json({
        error: 'role is required and must be a string'
      });
    }

    if (!count || typeof count !== 'number' || count < 1 || count > 10) {
      return res.status(400).json({
        error: 'count is required and must be a number between 1 and 10'
      });
    }

    // Get existing agent slugs for uniqueness check
    const existingAgentSlugs = await db.getAgentsSlugsForProject(projectId);

    // Generate unique agent names
    const agentData = [];
    for (let i = 0; i < count; i++) {
      const slug = generateUniqueAgentSlug(projectId, [...existingAgentSlugs, ...agentData.map(a => a.slug)]);
      agentData.push({ slug, role });
    }

    // Create agents in database
    const createdAgents = await db.createAgents(projectId, agentData);

    // Get project details for workspace creation
    const project = await db.getProjectById(projectId);
    if (!project) {
      return res.status(404).json({
        error: 'Project not found',
        projectId
      });
    }

    // Setup workspace service  
    // Resolve vcorp root path relative to this backend directory
    const vcorpRootPath = path.resolve(__dirname, '..', '..');
    const workspaceService = new AgentWorkspaceService({
      projectId,
      projectPath: project.path,
      vcorpRootPath
    });

    // Create workspaces for all agents
    const workspaceResults = await workspaceService.createMultipleWorkspaces(createdAgents);

    // Check for any workspace creation failures
    const failedWorkspaces = workspaceResults.filter(result => !result.success);
    const successfulWorkspaces = workspaceResults.filter(result => result.success);

    if (failedWorkspaces.length > 0) {
      console.warn(`⚠️  ${failedWorkspaces.length} workspace(s) failed to create:`, 
        failedWorkspaces.map(w => `Agent ${w.agentId}: ${w.error}`));
    }

    res.json({
      success: true,
      message: `Launched ${createdAgents.length} agents with role "${role}"`,
      agents: createdAgents,
      workspaces: {
        successful: successfulWorkspaces.length,
        failed: failedWorkspaces.length,
        details: workspaceResults
      }
    });

  } catch (error) {
    console.error('❌ Error launching agents:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;