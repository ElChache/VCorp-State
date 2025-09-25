import { Request, Response, Router } from 'express';
import { HealthResponse, HelloResponse } from '../types/index.js';
import { RealTimeEventService } from '../services/real-time-events.js';

export function createHealthRoutes(realTimeEvents: RealTimeEventService): Router {
  const router = Router();

  router.get('/api/hello', async (req: Request, res: Response<HelloResponse>) => {
    try {
      const stats = realTimeEvents.getStats();
      
      res.json({
        message: 'VCorpState Backend! 🚀',
        timestamp: new Date().toISOString(),
        status: `${stats.connectedClients} clients connected, real-time events ${stats.isListening ? 'active' : 'inactive'}`
      });
    } catch (err: any) {
      res.status(500).json({
        message: 'VCorpState Backend (real-time events failed)',
        error: err.message
      });
    }
  });

  router.get('/health', (req: Request, res: Response<HealthResponse>) => {
    res.json({ status: 'OK', service: 'vcorpstate-backend' });
  });

  router.get('/api/realtime/stats', (req: Request, res: Response) => {
    res.json(realTimeEvents.getStats());
  });

  return router;
}