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
  DatabaseRole
} from './types/index.js';
import { ROLE_TEMPLATES } from './templates/roles.js';
import { WORKFLOW_TEMPLATES } from './templates/workflows.js';
import { JOB_TEMPLATES, JOB_SEQUENCES } from './templates/jobs.js';
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
    jobs: JOB_TEMPLATES,
    sequences: JOB_SEQUENCES
  });
});

// Templates API - Get all templates
app.get('/api/templates', (req: Request, res: Response<TemplatesResponse>) => {
  res.json({
    roles: ROLE_TEMPLATES,
    workflows: WORKFLOW_TEMPLATES,
    jobs: JOB_TEMPLATES,
    sequences: JOB_SEQUENCES,
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
    
    // Create roles for the project from template
    let rolesResult = { rows: [] as DatabaseRole[] };
    if (template.roles && template.roles.length > 0) {
      const roleInserts = template.roles.map(role => [
        project.id,
        role.short_name,
        role.long_name,
        role.description_for_agent
      ]);
      
      const roleValues = roleInserts.map((_, index) => 
        `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`
      ).join(', ');
      
      const flatRoleValues = roleInserts.flat();
      
      rolesResult = await client.query(
        `INSERT INTO roles (project_id, short_name, long_name, description_for_agent) 
         VALUES ${roleValues} RETURNING *`,
        flatRoleValues
      );
    }
    
    await client.query('COMMIT');
    
    res.status(201).json({
      project,
      roles: rolesResult.rows,
      template: {
        id: template.id,
        name: template.name,
        description: template.description
      },
      workflows: template.workflows,
      jobs: template.jobs,
      sequences: template.sequences,
      message: `Project "${name}" created successfully using "${template.name}" template with ${rolesResult.rows.length} roles, ${Object.keys(template.workflows).length} workflows, and ${template.jobs.length} jobs`
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
    
    const rolesResult = await pool.query(
      'SELECT * FROM roles WHERE project_id = $1 ORDER BY short_name', [id]
    );
    
    // For existing projects, we'll return the full VCorp template for now
    // In the future, you might store template info in the database
    const template = PROJECT_TEMPLATES.vcorp_standard;
    
    res.json({
      project: projectResult.rows[0],
      roles: rolesResult.rows,
      template: {
        id: template.id,
        name: template.name,
        description: template.description
      },
      workflows: template.workflows,
      jobs: template.jobs,
      sequences: template.sequences
    });
  } catch (err) {
    console.error('Get project error:', err);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

app.listen(port, () => {
  console.log(`VCorpState backend running on http://localhost:${port}`);
});