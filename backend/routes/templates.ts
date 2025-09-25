import { Request, Response, Router } from 'express';
import { PROJECT_TEMPLATES, TEMPLATE_METADATA } from '../templates/project-templates.js';

export function createTemplateRoutes(): Router {
  const router = Router();

  router.get('/api/project-templates', (req: Request, res: Response) => {
    res.json(TEMPLATE_METADATA);
  });

  router.get('/api/project-templates/:templateId', (req: Request, res: Response) => {
    const { templateId } = req.params;
    const template = PROJECT_TEMPLATES[templateId];
    
    if (!template) {
      return res.status(404).json({ error: 'Project template not found' });
    }
    
    res.json(template);
  });

  return router;
}