import { Router, Request, Response } from 'express';
import { FileWatcherService } from '../services/file-watcher/index.js';
import { DatabaseService } from '../services/database.js';

export function createFileWatcherRoutes(
  fileWatcher: FileWatcherService, 
  db: DatabaseService
): Router {
  const router = Router();

  /**
   * Start watching a project's agent workspaces
   * POST /api/file-watcher/projects/:projectId/start
   */
  router.post('/projects/:projectId/start', async (req: Request, res: Response) => {
    try {
      const projectId = parseInt(req.params.projectId);
      const { projectPath, agentWorkspacesPath } = req.body;

      if (!projectId || !projectPath) {
        return res.status(400).json({ 
          error: 'projectId and projectPath are required' 
        });
      }

      // Verify project exists
      const projectExists = await db.checkProjectExists(projectId);
      if (!projectExists) {
        return res.status(404).json({ 
          error: `Project ${projectId} not found` 
        });
      }

      // Start watching
      await fileWatcher.startWatching({
        projectId,
        projectPath,
        agentWorkspacesPath
      });

      res.json({ 
        message: `Started watching project ${projectId}`,
        projectId,
        projectPath,
        agentWorkspacesPath: agentWorkspacesPath || `${projectPath}/agent_workspaces`,
        isWatching: fileWatcher.isWatching(projectId)
      });

    } catch (error) {
      console.error('Error starting file watcher:', error);
      res.status(500).json({ 
        error: 'Failed to start file watcher',
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  /**
   * Stop watching a project
   * POST /api/file-watcher/projects/:projectId/stop
   */
  router.post('/projects/:projectId/stop', async (req: Request, res: Response) => {
    try {
      const projectId = parseInt(req.params.projectId);

      if (!projectId) {
        return res.status(400).json({ 
          error: 'projectId is required' 
        });
      }

      await fileWatcher.stopWatching(projectId);

      res.json({ 
        message: `Stopped watching project ${projectId}`,
        projectId,
        isWatching: fileWatcher.isWatching(projectId)
      });

    } catch (error) {
      console.error('Error stopping file watcher:', error);
      res.status(500).json({ 
        error: 'Failed to stop file watcher',
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  /**
   * Get file watcher status for a project
   * GET /api/file-watcher/projects/:projectId/status
   */
  router.get('/projects/:projectId/status', async (req: Request, res: Response) => {
    try {
      const projectId = parseInt(req.params.projectId);

      if (!projectId) {
        return res.status(400).json({ 
          error: 'projectId is required' 
        });
      }

      const isWatching = fileWatcher.isWatching(projectId);

      res.json({ 
        projectId,
        isWatching,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error getting file watcher status:', error);
      res.status(500).json({ 
        error: 'Failed to get file watcher status',
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  /**
   * Get all watched projects
   * GET /api/file-watcher/projects
   */
  router.get('/projects', async (req: Request, res: Response) => {
    try {
      const watchedProjects = fileWatcher.getWatchedProjects();

      res.json({ 
        watchedProjects,
        count: watchedProjects.length,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error getting watched projects:', error);
      res.status(500).json({ 
        error: 'Failed to get watched projects',
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  return router;
}