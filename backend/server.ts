import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import { 
  CreateProjectRequest, 
  CreateProjectResponse, 
  GetProjectResponse, 
  ApiError, 
  HealthResponse, 
  HelloResponse, 
  TemplatesResponse, 
  JobTemplatesResponse,
  ProjectTemplateMetadata,
  ProjectTemplate,
  DatabaseRole,
  DatabaseSquad
} from './types/index.js';
import { SQUAD_TEMPLATES } from './templates/squads.js';
import { ROLE_TEMPLATES } from './templates/roles.js';
import { WORKFLOW_TEMPLATES } from './templates/workflows.js';
import { JOB_TEMPLATES } from './templates/jobs.js';
import { PROJECT_TEMPLATES, TEMPLATE_METADATA } from './templates/project-templates.js';

const app = express();
const port = process.env.BACKEND_PORT || process.env.PORT || 3001;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 
    `postgresql://${process.env.POSTGRES_USER || 'vcorp'}:${process.env.POSTGRES_PASSWORD || 'vcorp123'}@${process.env.POSTGRES_HOST || 'localhost'}:${process.env.POSTGRES_PORT || 5432}/${process.env.POSTGRES_DB || 'vcorpstate'}`
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/hello', async (req: Request, res: Response<HelloResponse>) => {
  try {
    // Test database connection
    const result = await pool.query('SELECT NOW() as timestamp');
    
    res.json({
      message: 'Hello World from VCorpState! 🚀',
      timestamp: result.rows[0].timestamp,
      status: 'Backend and PostgreSQL are working!'
    });
  } catch (err: any) {
    console.error('Database error:', err);
    res.status(500).json({
      message: 'Hello World from VCorpState! (DB connection failed)',
      error: err.message
    });
  }
});

app.get('/health', (req: Request, res: Response<HealthResponse>) => {
  res.json({ status: 'OK', service: 'vcorpstate-backend' });
});

// Templates API - Get available workflows
app.get('/api/templates/workflows', (req: Request, res: Response) => {
  res.json(WORKFLOW_TEMPLATES);
});

// Templates API - Get available jobs  
app.get('/api/templates/jobs', (req: Request, res: Response<JobTemplatesResponse>) => {
  res.json({
    jobs: JOB_TEMPLATES
    // Dependencies emerge from job input/output chains
  });
});

// Templates API - Get all templates
app.get('/api/templates', (req: Request, res: Response<TemplatesResponse>) => {
  res.json({
    squads: SQUAD_TEMPLATES,
    roles: ROLE_TEMPLATES,
    workflows: WORKFLOW_TEMPLATES,
    jobs: JOB_TEMPLATES,
    // Dependencies emerge from job input/output chains
    projects: PROJECT_TEMPLATES
  });
});

// Project Templates API - Get available project templates
app.get('/api/project-templates', (req: Request, res: Response<ProjectTemplateMetadata[]>) => {
  res.json(TEMPLATE_METADATA);
});

// Project Templates API - Get specific project template
app.get('/api/project-templates/:templateId', (req: Request, res: Response<ProjectTemplate | ApiError>) => {
  const { templateId } = req.params;
  const template = PROJECT_TEMPLATES[templateId];
  
  if (!template) {
    return res.status(404).json({ error: 'Project template not found' });
  }
  
  res.json(template);
});

// Projects API
app.post('/api/projects', async (req: Request<{}, CreateProjectResponse | ApiError, CreateProjectRequest>, res: Response<CreateProjectResponse | ApiError>) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    const { name, description, path, githubOrigin, templateId = 'vcorp_standard' } = req.body;
    
    // Validate required fields
    if (!name || !path) {
      return res.status(400).json({ 
        error: 'Name and path are required fields' 
      });
    }
    
    // Get project template
    const template = PROJECT_TEMPLATES[templateId];
    if (!template) {
      return res.status(400).json({
        error: `Project template "${templateId}" not found. Available templates: ${Object.keys(PROJECT_TEMPLATES).join(', ')}`
      });
    }
    
    // Create project
    const projectResult = await client.query(
      'INSERT INTO projects (name, description, path, github_origin) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, path, githubOrigin]
    );
    
    const project = projectResult.rows[0];
    
    // Create squads for the project from template
    let squadsResult = { rows: [] as DatabaseSquad[] };
    if (template.squads && template.squads.length > 0) {
      const squadInserts = template.squads.map(squad => [
        project.id,
        squad.slug,
        squad.name,
        squad.description,
        squad.color
      ]);
      
      const squadValues = squadInserts.map((_, index) => 
        `($${index * 5 + 1}, $${index * 5 + 2}, $${index * 5 + 3}, $${index * 5 + 4}, $${index * 5 + 5})`
      ).join(', ');
      
      const flatSquadValues = squadInserts.flat();
      
      squadsResult = await client.query(
        `INSERT INTO squads (project_id, slug, name, description, color) 
         VALUES ${squadValues} RETURNING *`,
        flatSquadValues
      );
    }
    
    // Create roles for the project from template
    let rolesResult = { rows: [] as DatabaseRole[] };
    if (template.roles && template.roles.length > 0) {
      const roleInserts = template.roles.map(role => [
        project.id,
        role.short_name,
        role.long_name,
        role.squad_slug,
        role.description_for_agent
      ]);
      
      const roleValues = roleInserts.map((_, index) => 
        `($${index * 5 + 1}, $${index * 5 + 2}, $${index * 5 + 3}, $${index * 5 + 4}, $${index * 5 + 5})`
      ).join(', ');
      
      const flatRoleValues = roleInserts.flat();
      
      rolesResult = await client.query(
        `INSERT INTO roles (project_id, short_name, long_name, squad_slug, description_for_agent) 
         VALUES ${roleValues} RETURNING *`,
        flatRoleValues
      );
    }

    // Create workflows for the project from template
    let workflowsResult = { rows: [] };
    if (template.workflows && Object.keys(template.workflows).length > 0) {
      const workflowInserts = Object.values(template.workflows).map(workflow => [
        project.id,
        workflow.slug,
        workflow.name,
        workflow.description,
        workflow.initial_state,
        JSON.stringify(workflow.states)
      ]);
      
      const workflowValues = workflowInserts.map((_, index) => 
        `($${index * 6 + 1}, $${index * 6 + 2}, $${index * 6 + 3}, $${index * 6 + 4}, $${index * 6 + 5}, $${index * 6 + 6})`
      ).join(', ');
      
      const flatWorkflowValues = workflowInserts.flat();
      
      workflowsResult = await client.query(
        `INSERT INTO workflows (project_id, slug, name, description, initial_state, states) 
         VALUES ${workflowValues} RETURNING *`,
        flatWorkflowValues
      );
    }

    // Create jobs for the project from template
    let jobsResult = { rows: [] };
    if (template.jobs && template.jobs.length > 0) {
      // Get the actual job templates by slug
      const selectedJobs = JOB_TEMPLATES.filter(job => template.jobs.includes(job.slug));
      
      const jobInserts = selectedJobs.map(job => [
        project.id,
        job.slug,
        job.name,
        job.description,
        Array.isArray(job.role) ? job.role[0] : job.role, // Take first role if array
        job.workflow_slug,
        JSON.stringify(job.inputs),
        JSON.stringify(job.outputs),
        job.requires_approval,
        job.auto_start,
        job.priority
      ]);
      
      const jobValues = jobInserts.map((_, index) => 
        `($${index * 11 + 1}, $${index * 11 + 2}, $${index * 11 + 3}, $${index * 11 + 4}, $${index * 11 + 5}, $${index * 11 + 6}, $${index * 11 + 7}, $${index * 11 + 8}, $${index * 11 + 9}, $${index * 11 + 10}, $${index * 11 + 11})`
      ).join(', ');
      
      const flatJobValues = jobInserts.flat();
      
      jobsResult = await client.query(
        `INSERT INTO jobs (project_id, slug, name, description, role, workflow_slug, inputs, outputs, requires_approval, auto_start, priority) 
         VALUES ${jobValues} RETURNING *`,
        flatJobValues
      );
    }
    
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
      // Dependencies built from job input/output chains,
      message: `Project "${name}" created successfully using "${template.name}" template with ${squadsResult.rows.length} squads, ${rolesResult.rows.length} roles, ${workflowsResult.rows.length} workflows, and ${jobsResult.rows.length} jobs`
    });
    
  } catch (err: any) {
    await client.query('ROLLBACK');
    console.error('Project creation error:', err);
    
    if (err.code === '23505') { // Unique constraint violation
      res.status(400).json({ error: 'Project name already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create project' });
    }
  } finally {
    client.release();
  }
});

// Get all projects
app.get('/api/projects', async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Get projects error:', err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Get project with roles
app.get('/api/projects/:id', async (req: Request, res: Response<GetProjectResponse | ApiError>) => {
  try {
    const { id } = req.params;
    
    const projectResult = await pool.query(
      'SELECT * FROM projects WHERE id = $1', [id]
    );
    
    if (projectResult.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    const squadsResult = await pool.query(
      'SELECT * FROM squads WHERE project_id = $1 ORDER BY slug', [id]
    );

    const rolesResult = await pool.query(
      'SELECT * FROM roles WHERE project_id = $1 ORDER BY short_name', [id]
    );

    const workflowsResult = await pool.query(
      'SELECT * FROM workflows WHERE project_id = $1 ORDER BY slug', [id]
    );

    const jobsResult = await pool.query(
      'SELECT * FROM jobs WHERE project_id = $1 ORDER BY priority, slug', [id]
    );
    
    res.json({
      project: projectResult.rows[0],
      squads: squadsResult.rows,
      roles: rolesResult.rows,
      workflows: workflowsResult.rows,
      jobs: jobsResult.rows,
      // Dependencies built from job input/output chains
    });
  } catch (err) {
    console.error('Get project error:', err);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

app.listen(port, () => {
  console.log(`VCorpState backend running on http://localhost:${port}`);
});