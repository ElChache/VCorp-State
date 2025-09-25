import { Request, Response, Router } from 'express';
import { PrismaDatabaseService } from '../services/prisma-database.js';
import { RealTimeEventService } from '../services/real-time-events.js';

export function createTestingRoutes(
  db: PrismaDatabaseService, 
  realTimeEvents: RealTimeEventService
): Router {
  const router = Router();

  // Test event emission (useful for development)
  router.post('/api/test/emit-event', async (req: Request, res: Response) => {
    try {
      const { projectId, eventData } = req.body;
      
      if (!projectId) {
        return res.status(400).json({ error: 'projectId required' });
      }
      
      await realTimeEvents.emitTestEvent(projectId, eventData || {});
      
      res.json({ 
        success: true,
        message: 'Test event emitted',
        timestamp: Date.now()
      });
    } catch (err: any) {
      console.error('Emit test event error:', err);
      res.status(500).json({ error: 'Failed to emit test event' });
    }
  });

  // Simulate document status change (for testing)
  router.post('/api/test/update-document-status', async (req: Request, res: Response) => {
    try {
      const { documentId, status, agentId } = req.body;
      
      if (!documentId || !status) {
        return res.status(400).json({ error: 'documentId and status required' });
      }
      
      await db.updateDocumentStatus(documentId, status, agentId);
      
      res.json({ 
        success: true,
        message: 'Document status updated - real-time event should fire',
        documentId,
        status,
        timestamp: Date.now()
      });
    } catch (err: any) {
      console.error('Update document status error:', err);
      res.status(500).json({ error: 'Failed to update document status' });
    }
  });

  return router;
}