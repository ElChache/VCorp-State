import { Request, Response, Router } from 'express';
import { Pool } from 'pg';
import { 
  CreateProjectRequest, 
  CreateProjectResponse, 
  ApiError 
} from '../types/index.js';
import { PROJECT_TEMPLATES } from '../templates/project-templates.js';
import { JOB_TEMPLATES } from '../templates/jobs.js';
import { ProjectSeedingService } from '../services/project-seeding.js';

export function createProjectRoutes(
  connectionString: string,
  seedingService: ProjectSeedingService
): Router {
  const router = Router();

  // Complete project creation with all template components
  router.post('/api/projects', async (req: Request<{}, CreateProjectResponse | ApiError, CreateProjectRequest>, res: Response<CreateProjectResponse | ApiError>) => {
    const pool = new Pool({ connectionString });
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      const { name, description, path, githubOrigin, templateId = 'vcorp_standard' } = req.body;
      
      if (!name || !path) {
        return res.status(400).json({ 
          error: 'Name and path are required fields' 
        });
      }
      
      const template = PROJECT_TEMPLATES[templateId];
      if (!template) {
        return res.status(400).json({
          error: `Project template "${templateId}" not found`
        });
      }
      
      // Create project
      const projectResult = await client.query(
        'INSERT INTO projects (name, description, path, github_origin) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, path, githubOrigin]
      );
      
      const project = projectResult.rows[0];
      
      // Create squads
      let squadsResult = { rows: [] as any[] };
      if (template.squads && template.squads.length > 0) {
        const squadInserts = template.squads.map(squad => [
          project.id, squad.slug, squad.name, squad.description, squad.color
        ]);
        
        const squadValues = squadInserts.map((_, index) => 
          `($${index * 5 + 1}, $${index * 5 + 2}, $${index * 5 + 3}, $${index * 5 + 4}, $${index * 5 + 5})`
        ).join(', ');
        
        squadsResult = await client.query(
          `INSERT INTO squads (project_id, slug, name, description, color) VALUES ${squadValues} RETURNING *`,
          squadInserts.flat()
        );
      }
      
      // Create roles
      let rolesResult = { rows: [] as any[] };
      if (template.roles && template.roles.length > 0) {
        const roleInserts = template.roles.map(role => [
          project.id, role.short_name, role.long_name, role.squad_slug, role.description_for_agent
        ]);
        
        const roleValues = roleInserts.map((_, index) => 
          `($${index * 5 + 1}, $${index * 5 + 2}, $${index * 5 + 3}, $${index * 5 + 4}, $${index * 5 + 5})`
        ).join(', ');
        
        rolesResult = await client.query(
          `INSERT INTO roles (project_id, short_name, long_name, squad_slug, description_for_agent) VALUES ${roleValues} RETURNING *`,
          roleInserts.flat()
        );
      }

      // Create workflows
      let workflowsResult = { rows: [] as any[] };
      if (template.workflows && Object.keys(template.workflows).length > 0) {
        const workflowInserts = Object.values(template.workflows).map(workflow => [
          project.id, workflow.slug, workflow.name, workflow.description, workflow.initial_state, JSON.stringify(workflow.states)
        ]);
        
        const workflowValues = workflowInserts.map((_, index) => 
          `($${index * 6 + 1}, $${index * 6 + 2}, $${index * 6 + 3}, $${index * 6 + 4}, $${index * 6 + 5}, $${index * 6 + 6})`
        ).join(', ');
        
        workflowsResult = await client.query(
          `INSERT INTO workflows (project_id, slug, name, description, initial_state, states) VALUES ${workflowValues} RETURNING *`,
          workflowInserts.flat()
        );
      }

      // Create jobs
      let jobsResult = { rows: [] as any[] };
      if (template.jobs && template.jobs.length > 0) {
        const selectedJobs = JOB_TEMPLATES.filter(job => template.jobs.includes(job.slug));
        
        const jobInserts = selectedJobs.map(job => [
          project.id, job.slug, job.name, job.description,
          Array.isArray(job.role) ? job.role[0] : job.role,
          job.workflow_slug, JSON.stringify(job.inputs), JSON.stringify(job.outputs),
          job.automated, job.completed, job.paused
        ]);
        
        const jobValues = jobInserts.map((_, index) => 
          `($${index * 11 + 1}, $${index * 11 + 2}, $${index * 11 + 3}, $${index * 11 + 4}, $${index * 11 + 5}, $${index * 11 + 6}, $${index * 11 + 7}, $${index * 11 + 8}, $${index * 11 + 9}, $${index * 11 + 10}, $${index * 11 + 11})`
        ).join(', ');
        
        jobsResult = await client.query(
          `INSERT INTO jobs (project_id, slug, name, description, role, workflow_slug, inputs, outputs, automated, completed, paused) VALUES ${jobValues} RETURNING *`,
          jobInserts.flat()
        );
      }
      
      // Seed project with document collections for graph structure
      await seedingService.seedProjectGraph(project.id, template.jobs, client);
      
      await client.query('COMMIT');
      
      res.status(201).json({
        project,
        squads: squadsResult.rows,
        roles: rolesResult.rows,
        workflows: workflowsResult.rows,
        jobs: jobsResult.rows,
        template: {
          id: template.id,
          name: template.name,
          description: template.description
        },
        message: `Project "${name}" created successfully with ${jobsResult.rows.length} jobs and real-time graph structure`
      });
      
    } catch (err: any) {
      await client.query('ROLLBACK');
      console.error('Project creation error:', err);
      
      if (err.code === '23505') {
        res.status(400).json({ error: 'Project name already exists' });
      } else {
        res.status(500).json({ error: 'Failed to create project' });
      }
    } finally {
      client.release();
      await pool.end();
    }
  });

  return router;
}