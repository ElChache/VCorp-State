import { Request, Response, Router } from 'express';
import { DatabaseService } from '../services/database.js';

export function createDataRoutes(db: DatabaseService): Router {
  const router = Router();

  // Get complete initial data for a project (single API call)
  router.get('/api/projects/:id/initial-data', async (req: Request, res: Response) => {
    try {
      const projectId = parseInt(req.params.id);
      
      if (isNaN(projectId)) {
        return res.status(400).json({ error: 'Invalid project ID' });
      }
      
      // Check if project exists
      const exists = await db.checkProjectExists(projectId);
      if (!exists) {
        return res.status(404).json({ error: 'Project not found' });
      }
      
      // Get all initial data in one efficient call
      const initialData = await db.getProjectInitialData(projectId);
      
      res.json(initialData);
    } catch (err: any) {
      console.error('Get initial data error:', err);
      res.status(500).json({ error: 'Failed to fetch project initial data' });
    }
  });

  // Collection details for modals
  router.get('/api/collections/:id/details', async (req: Request, res: Response) => {
    try {
      const collectionId = parseInt(req.params.id);
      
      if (isNaN(collectionId)) {
        return res.status(400).json({ error: 'Invalid collection ID' });
      }
      
      const [collection, documents, progress] = await Promise.all([
        db.getCollectionById(collectionId),
        db.getDocumentsByCollection(collectionId),
        db.getCollectionProgress(collectionId)
      ]);
      
      if (!collection) {
        return res.status(404).json({ error: 'Collection not found' });
      }
      
      res.json({
        collection,
        documents,
        progress,
        file_paths: documents.map(d => d.file_path).filter(Boolean),
        last_updated: collection.updated_at
      });
    } catch (err: any) {
      console.error('Get collection details error:', err);
      res.status(500).json({ error: 'Failed to fetch collection details' });
    }
  });

  // Job details for modals  
  router.get('/api/jobs/:id/details', async (req: Request, res: Response) => {
    try {
      const jobId = parseInt(req.params.id);
      
      if (isNaN(jobId)) {
        return res.status(400).json({ error: 'Invalid job ID' });
      }
      
      const job = await db.getJobById(jobId);
      
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      
      // TODO: Add agent info, execution logs when agent system is implemented
      res.json({
        job,
        agent: null,
        input_collections: [],
        output_collections: [],
        execution_log: [],
        duration: '0s',
        snapshots: []
      });
    } catch (err: any) {
      console.error('Get job details error:', err);
      res.status(500).json({ error: 'Failed to fetch job details' });
    }
  });

  return router;
}