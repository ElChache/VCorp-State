import { PrismaClient } from '../generated/prisma/index.js';
import { Sql } from '@prisma/client/runtime/library.js';
import {
  DatabaseDocument,
  DatabaseDocumentCollection,
  Job,
  DatabaseSquad,
  DatabaseRole,
  DatabaseAgent
} from '../types/index.js';

export class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // =====================================================
  // PROJECT DATA FETCHING (for initial graph load)
  // =====================================================

  async getProjectInitialData(projectId: number) {
    const [collections, documents, jobs, squads, roles, agents] = await Promise.all([
      this.getDocumentCollections(projectId),
      this.getDocuments(projectId),
      this.getJobs(projectId),
      this.getSquads(projectId),
      this.getRoles(projectId),
      this.getAgents(projectId)
    ]);

    return {
      collections,
      documents,
      jobs,
      squads,
      roles,
      agents,
      timestamp: Date.now()
    };
  }

  // =====================================================
  // DOCUMENT COLLECTIONS (using Prisma ORM)
  // =====================================================

  private async getDocumentCollections(projectId: number): Promise<DatabaseDocumentCollection[]> {
    const collections = await this.prisma.documentCollection.findMany({
      where: { project_id: projectId },
      orderBy: { slug: 'asc' }
    });

    return collections.map(this.mapDocumentCollection);
  }

  async getCollectionById(collectionId: number): Promise<DatabaseDocumentCollection | null> {
    const collection = await this.prisma.documentCollection.findUnique({
      where: { id: collectionId }
    });

    return collection ? this.mapDocumentCollection(collection) : null;
  }

  private mapDocumentCollection(collection: any): DatabaseDocumentCollection {
    return {
      id: collection.id,
      project_id: collection.project_id,
      slug: collection.slug,
      name: collection.name,
      description: collection.description,
      path: collection.path,
      document_type: collection.document_type,
      created_at: collection.created_at.toISOString(),
      updated_at: collection.updated_at.toISOString()
    };
  }

  // =====================================================
  // DOCUMENTS (using Prisma ORM)
  // =====================================================

  private async getDocuments(projectId: number): Promise<DatabaseDocument[]> {
    const documents = await this.prisma.document.findMany({
      where: { project_id: projectId },
      orderBy: { created_at: 'desc' }
    });

    return documents.map(this.mapDocument);
  }

  async getDocumentsByCollection(collectionId: number): Promise<DatabaseDocument[]> {
    const documents = await this.prisma.document.findMany({
      where: { document_collection_id: collectionId },
      orderBy: { created_at: 'desc' }
    });

    return documents.map(this.mapDocument);
  }

  async updateDocumentStatus(
    documentId: number, 
    status: 'blocked' | 'ready' | 'in_progress' | 'done',
    agentId?: string
  ): Promise<void> {
    await this.prisma.document.update({
      where: { id: documentId },
      data: {
        status: status,
        picked_by_agent_id: agentId || null,
        last_updated_at: new Date()
      }
    });
  }

  private mapDocument(document: any): DatabaseDocument {
    return {
      id: document.id,
      project_id: document.project_id,
      document_collection_id: document.document_collection_id,
      slug: document.slug,
      name: document.name,
      content: document.content,
      file_path: document.file_path,
      document_type: document.document_type,
      parent_document_id: document.parent_document_id,
      blocked_by: document.blocked_by,
      status: document.status,
      ready: document.ready,
      assigned_to_role: document.assigned_to_role,
      picked_by_agent_id: document.picked_by_agent_id,
      metadata: document.metadata,
      created_at: document.created_at.toISOString(),
      updated_at: document.updated_at.toISOString(),
      last_updated_at: document.last_updated_at.toISOString()
    };
  }

  // =====================================================
  // JOBS (using Prisma ORM)
  // =====================================================

  private async getJobs(projectId: number): Promise<(Job & { id: number; project_id: number })[]> {
    const jobs = await this.prisma.job.findMany({
      where: { project_id: projectId },
      orderBy: { slug: 'asc' }
    });

    return jobs.map(this.mapJob);
  }

  async getJobById(jobId: number): Promise<(Job & { id: number; project_id: number }) | null> {
    const job = await this.prisma.job.findUnique({
      where: { id: jobId }
    });

    return job ? this.mapJob(job) : null;
  }

  async updateJobStatus(
    jobId: number,
    updates: {
      completed?: boolean;
      paused?: boolean;
      completed_at?: Date;
      last_processed_at?: Date;
    }
  ): Promise<void> {
    await this.prisma.job.update({
      where: { id: jobId },
      data: updates
    });
  }

  private mapJob(job: any): Job & { id: number; project_id: number } {
    return {
      id: job.id,
      project_id: job.project_id,
      slug: job.slug,
      name: job.name,
      description: job.description,
      role: job.role,
      workflow_id: job.workflow_id,
      inputs: job.inputs,
      outputs: job.outputs,
      auto_start: job.auto_start,
      auto_complete: job.auto_complete,
      in_progress: job.in_progress,
      completed: job.completed,
      paused: job.paused,
      completed_at: job.completed_at?.toISOString(),
      last_processed_at: job.last_processed_at?.toISOString()
    };
  }

  // =====================================================
  // SQUADS & ROLES (using Prisma ORM)
  // =====================================================

  private async getSquads(projectId: number): Promise<DatabaseSquad[]> {
    const squads = await this.prisma.squad.findMany({
      where: { project_id: projectId },
      orderBy: { slug: 'asc' }
    });

    return squads.map(this.mapSquad);
  }

  private async getRoles(projectId: number): Promise<DatabaseRole[]> {
    const roles = await this.prisma.role.findMany({
      where: { project_id: projectId },
      orderBy: { short_name: 'asc' }
    });

    return roles.map(this.mapRole);
  }

  private mapSquad(squad: any): DatabaseSquad {
    return {
      id: squad.id,
      project_id: squad.project_id,
      slug: squad.slug,
      name: squad.name,
      description: squad.description,
      color: squad.color,
      created_at: squad.created_at.toISOString(),
      updated_at: squad.updated_at.toISOString()
    };
  }

  private mapRole(role: any): DatabaseRole {
    return {
      id: role.id,
      project_id: role.project_id,
      short_name: role.short_name,
      long_name: role.long_name,
      squad_slug: role.squad_slug,
      description_for_agent: role.description_for_agent,
      created_at: role.created_at.toISOString(),
      updated_at: role.updated_at.toISOString()
    };
  }

  // =====================================================
  // UTILITY METHODS
  // =====================================================

  async checkProjectExists(projectId: number): Promise<boolean> {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      select: { id: true }
    });
    return !!project;
  }

  // =====================================================
  // COMPLEX QUERIES (keeping as raw SQL)
  // =====================================================

  async getCollectionProgress(collectionId: number) {
    // This is a complex aggregation query - keeping as raw SQL
    const result = await this.prisma.$queryRaw`
      SELECT 
        dc.id,
        dc.slug,
        dc.name,
        COUNT(d.id)::int as total,
        COUNT(CASE WHEN d.status = 'done' THEN 1 END)::int as completed,
        COUNT(CASE WHEN d.status = 'in_progress' THEN 1 END)::int as in_progress,
        COUNT(CASE WHEN d.status = 'blocked' THEN 1 END)::int as blocked,
        COUNT(CASE WHEN d.status = 'ready' THEN 1 END)::int as ready
      FROM document_collections dc
      LEFT JOIN documents d ON dc.id = d.document_collection_id
      WHERE dc.id = ${collectionId}
      GROUP BY dc.id, dc.slug, dc.name
    `;
    
    return (result as any[])[0] || null;
  }

  // =====================================================
  // PROJECTS (using Prisma ORM)
  // =====================================================

  async getProjectById(projectId: number) {
    return await this.prisma.project.findUnique({
      where: { id: projectId }
    });
  }

  // =====================================================
  // DOCUMENTS (using Prisma ORM) 
  // =====================================================

  async getDocumentById(documentId: number) {
    return await this.prisma.document.findUnique({
      where: { id: documentId }
    });
  }

  async updateDocumentReady(documentId: number, ready: boolean) {
    return await this.prisma.document.update({
      where: { id: documentId },
      data: { 
        ready,
        updated_at: new Date()
      }
    });
  }

  async getReadyDocuments() {
    return await this.prisma.document.findMany({
      where: { ready: true },
      orderBy: { updated_at: 'desc' }
    });
  }

  async getReadyDocumentsByProject(projectId: number) {
    return await this.prisma.document.findMany({
      where: { 
        project_id: projectId,
        ready: true 
      },
      orderBy: { updated_at: 'desc' }
    });
  }

  // =====================================================
  // AGENTS (using Prisma ORM)
  // =====================================================

  private async getAgents(projectId: number): Promise<DatabaseAgent[]> {
    const agents = await this.prisma.agent.findMany({
      where: { project_id: projectId },
      orderBy: { slug: 'asc' }
    });

    return agents.map(this.mapAgent);
  }

  async getAgentsSlugsForProject(projectId: number): Promise<string[]> {
    const agents = await this.prisma.agent.findMany({
      where: { project_id: projectId },
      select: { slug: true }
    });

    return agents.map(agent => agent.slug);
  }

  async validateRoleExists(projectId: number, roleShortName: string): Promise<boolean> {
    const role = await this.prisma.role.findUnique({
      where: {
        project_id_short_name: {
          project_id: projectId,
          short_name: roleShortName
        }
      }
    });
    return role !== null;
  }

  async createAgents(projectId: number, agentData: Array<{ slug: string; role: string }>): Promise<DatabaseAgent[]> {
    // Validate all roles exist first
    for (const data of agentData) {
      const roleExists = await this.validateRoleExists(projectId, data.role);
      if (!roleExists) {
        throw new Error(`Role '${data.role}' does not exist in project ${projectId}`);
      }
    }

    const createdAgents = await Promise.all(
      agentData.map(data => 
        this.prisma.agent.create({
          data: {
            project_id: projectId,
            slug: data.slug,
            role: data.role,
            status: 'idle'
          }
        })
      )
    );

    return createdAgents.map(this.mapAgent);
  }

  private mapAgent(agent: any): DatabaseAgent {
    return {
      id: agent.id,
      project_id: agent.project_id,
      slug: agent.slug,
      role: agent.role,
      status: agent.status,
      first_launched_at: agent.first_launched_at?.toISOString(),
      last_launched_at: agent.last_launched_at?.toISOString(),
      created_at: agent.created_at.toISOString(),
      updated_at: agent.updated_at.toISOString()
    };
  }

  // =====================================================
  // TRANSACTION SUPPORT
  // =====================================================

  async transaction<T>(fn: (prisma: PrismaClient) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(fn);
  }

  // =====================================================
  // CLEANUP
  // =====================================================

  async close(): Promise<void> {
    await this.prisma.$disconnect();
  }
}