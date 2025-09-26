import { Request, Response, Router } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';
import { 
  CreateProjectRequest, 
  CreateProjectResponse, 
  ApiError 
} from '../types/index.js';
import { PROJECT_TEMPLATES } from '../templates/project-templates.js';
import { JOB_TEMPLATES } from '../templates/jobs.js';
import { ProjectSeedingService } from '../services/project-seeding.js';
import * as fs from 'fs';
import { join } from 'path';

export function createProjectRoutes(
  seedingService: ProjectSeedingService
): Router {
  const router = Router();
  const prisma = new PrismaClient();

  // Get all projects
  router.get('/api/projects', async (req: Request, res: Response) => {
    try {
      const projects = await prisma.project.findMany({
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          name: true,
          description: true,
          path: true,
          github_origin: true,
          created_at: true,
          updated_at: true
        }
      });
      
      res.json(projects);
    } catch (err: any) {
      console.error('List projects error:', err);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

  // Complete project creation with all template components using Prisma
  router.post('/api/projects', async (req: Request<{}, CreateProjectResponse | ApiError, CreateProjectRequest>, res: Response<CreateProjectResponse | ApiError>) => {
    try {
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

      // Use Prisma transaction for all operations
      const result = await prisma.$transaction(async (tx) => {
        // Create project
        const project = await tx.project.create({
          data: {
            name,
            description,
            path,
            github_origin: githubOrigin
          }
        });

        // Create squads
        const squads = [];
        if (template.squads && template.squads.length > 0) {
          const squadsData = template.squads.map(squad => ({
            project_id: project.id,
            slug: squad.slug,
            name: squad.name,
            description: squad.description,
            color: squad.color
          }));

          await tx.squad.createMany({ data: squadsData });
          
          // Get created squads
          const createdSquads = await tx.squad.findMany({
            where: { project_id: project.id }
          });
          squads.push(...createdSquads);
        }

        // Create roles
        const roles = [];
        if (template.roles && template.roles.length > 0) {
          const rolesData = template.roles.map(role => ({
            project_id: project.id,
            short_name: role.short_name,
            long_name: role.long_name,
            squad_slug: role.squad_slug,
            description_for_agent: role.description_for_agent
          }));

          await tx.role.createMany({ data: rolesData });

          // Get created roles
          const createdRoles = await tx.role.findMany({
            where: { project_id: project.id }
          });
          roles.push(...createdRoles);
        }

        // Create workflows
        const workflows = [];
        if (template.workflows && Object.keys(template.workflows).length > 0) {
          const workflowsData = Object.values(template.workflows).map(workflow => ({
            project_id: project.id,
            slug: workflow.slug,
            name: workflow.name,
            description: workflow.description,
            initial_state: workflow.initial_state,
            states: workflow.states
          }));

          await tx.workflow.createMany({ data: workflowsData });

          // Get created workflows
          const createdWorkflows = await tx.workflow.findMany({
            where: { project_id: project.id }
          });
          workflows.push(...createdWorkflows);
        }

        // Create jobs
        const jobs = [];
        if (template.jobs && template.jobs.length > 0) {
          const selectedJobs = JOB_TEMPLATES.filter(job => template.jobs.includes(job.slug));
          
          const jobsData = selectedJobs.map(job => ({
            project_id: project.id,
            slug: job.slug,
            name: job.name,
            description: job.description,
            role: Array.isArray(job.role) ? job.role[0] : job.role,
            workflow_slug: job.workflow_slug,
            inputs: job.inputs,
            outputs: job.outputs,
            auto_start: job.auto_start,
            auto_complete: job.auto_complete,
            in_progress: job.in_progress,
            completed: job.completed,
            paused: job.paused
          }));

          await tx.job.createMany({ data: jobsData });

          // Get created jobs
          const createdJobs = await tx.job.findMany({
            where: { project_id: project.id }
          });
          jobs.push(...createdJobs);
        }

        return { project, squads, roles, workflows, jobs };
      });

      // Create project directory structure
      try {
        const agentsWorkspacePath = join(result.project.path, 'agents_workspaces');
        const initialDocsPath = join(result.project.path, 'initial-docs');
        
        // Create agents_workspaces folder
        if (!fs.existsSync(agentsWorkspacePath)) {
          fs.mkdirSync(agentsWorkspacePath, { recursive: true });
          console.log(`✅ Created agents_workspaces folder at: ${agentsWorkspacePath}`);
        } else {
          console.log(`📁 agents_workspaces folder already exists at: ${agentsWorkspacePath}`);
        }

        // Create initial-docs folder
        if (!fs.existsSync(initialDocsPath)) {
          fs.mkdirSync(initialDocsPath, { recursive: true });
          console.log(`✅ Created initial-docs folder at: ${initialDocsPath}`);
        } else {
          console.log(`📁 initial-docs folder already exists at: ${initialDocsPath}`);
        }
      } catch (error) {
        console.error('⚠️  Failed to create project folders:', error);
        // Don't fail the entire project creation if folder creation fails
      }

      // Seed project with document collections for graph structure
      // This is done outside the transaction as it's a separate concern
      await seedingService.seedProjectGraph(result.project.id, template.jobs);
      
      res.status(201).json({
        project: {
          id: result.project.id,
          name: result.project.name,
          description: result.project.description || undefined,
          path: result.project.path,
          github_origin: result.project.github_origin || undefined,
          created_at: result.project.created_at.toISOString(),
          updated_at: result.project.updated_at.toISOString()
        },
        squads: result.squads.map(squad => ({
          id: squad.id,
          project_id: squad.project_id,
          slug: squad.slug,
          name: squad.name,
          description: squad.description,
          color: squad.color,
          created_at: squad.created_at.toISOString(),
          updated_at: squad.updated_at.toISOString()
        })),
        roles: result.roles.map(role => ({
          id: role.id,
          project_id: role.project_id,
          short_name: role.short_name,
          long_name: role.long_name,
          squad_slug: role.squad_slug,
          description_for_agent: role.description_for_agent,
          created_at: role.created_at.toISOString(),
          updated_at: role.updated_at.toISOString()
        })),
        workflows: result.workflows,
        jobs: result.jobs,
        template: {
          id: template.id,
          name: template.name,
          description: template.description
        },
        message: `Project "${name}" created successfully with ${result.jobs.length} jobs and real-time graph structure`
      });
      
    } catch (err: any) {
      console.error('Project creation error:', err);
      
      if (err.code === 'P2002') { // Prisma unique constraint violation
        res.status(400).json({ error: 'Project name already exists' });
      } else {
        res.status(500).json({ error: 'Failed to create project' });
      }
    }
  });

  return router;
}