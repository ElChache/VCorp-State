import { Pool, PoolClient } from 'pg';
import {
  DatabaseDocument,
  DatabaseDocumentCollection,
  Job,
  DatabaseSquad,
  DatabaseRole
} from '../types/index.js';

export class SimpleDatabaseService {
  constructor(private pool: Pool) {}

  // =====================================================
  // PROJECT DATA FETCHING (for initial graph load)
  // =====================================================

  async getProjectInitialData(projectId: number) {
    const client = await this.pool.connect();
    
    try {
      const [collections, documents, jobs, squads, roles] = await Promise.all([
        this.getDocumentCollections(client, projectId),
        this.getDocuments(client, projectId),
        this.getJobs(client, projectId),
        this.getSquads(client, projectId),
        this.getRoles(client, projectId)
      ]);

      return {
        collections,
        documents,
        jobs,
        squads,
        roles,
        timestamp: Date.now()
      };
    } finally {
      client.release();
    }
  }

  // =====================================================
  // DOCUMENT COLLECTIONS
  // =====================================================

  private async getDocumentCollections(
    client: PoolClient, 
    projectId: number
  ): Promise<DatabaseDocumentCollection[]> {
    const result = await client.query(`
      SELECT 
        id,
        project_id,
        slug,
        name,
        description,
        document_type,
        created_at,
        updated_at
      FROM document_collections
      WHERE project_id = $1
      ORDER BY slug
    `, [projectId]);
    
    return result.rows;
  }

  async getCollectionById(collectionId: number): Promise<DatabaseDocumentCollection | null> {
    const result = await this.pool.query(`
      SELECT 
        id,
        project_id,
        slug,
        name,
        description,
        document_type,
        created_at,
        updated_at
      FROM document_collections
      WHERE id = $1
    `, [collectionId]);
    
    return result.rows[0] || null;
  }

  // =====================================================
  // DOCUMENTS
  // =====================================================

  private async getDocuments(
    client: PoolClient,
    projectId: number
  ): Promise<DatabaseDocument[]> {
    const result = await client.query(`
      SELECT 
        id,
        project_id,
        document_collection_id,
        slug,
        name,
        content,
        file_path,
        document_type,
        parent_document_id,
        blocked_by,
        status,
        assigned_to_role,
        picked_by_agent_id,
        metadata,
        created_at,
        updated_at,
        last_updated_at
      FROM documents
      WHERE project_id = $1
      ORDER BY created_at DESC
    `, [projectId]);
    
    return result.rows;
  }

  async getDocumentsByCollection(collectionId: number): Promise<DatabaseDocument[]> {
    const result = await this.pool.query(`
      SELECT 
        id,
        project_id,
        document_collection_id,
        slug,
        name,
        content,
        file_path,
        document_type,
        parent_document_id,
        blocked_by,
        status,
        assigned_to_role,
        picked_by_agent_id,
        metadata,
        created_at,
        updated_at,
        last_updated_at
      FROM documents
      WHERE document_collection_id = $1
      ORDER BY created_at DESC
    `, [collectionId]);
    
    return result.rows;
  }

  async updateDocumentStatus(
    documentId: number, 
    status: 'blocked' | 'ready' | 'in_progress' | 'done',
    agentId?: string
  ): Promise<void> {
    await this.pool.query(`
      UPDATE documents 
      SET 
        status = $2,
        picked_by_agent_id = $3,
        last_updated_at = NOW()
      WHERE id = $1
    `, [documentId, status, agentId || null]);
  }

  // =====================================================
  // JOBS
  // =====================================================

  private async getJobs(
    client: PoolClient,
    projectId: number
  ): Promise<(Job & { id: number; project_id: number })[]> {
    const result = await client.query(`
      SELECT 
        id,
        project_id,
        slug,
        name,
        description,
        role,
        workflow_slug,
        inputs,
        outputs,
        automated,
        completed,
        paused,
        completed_at,
        last_processed_at,
        created_at,
        updated_at
      FROM jobs
      WHERE project_id = $1
      ORDER BY slug
    `, [projectId]);
    
    return result.rows;
  }

  async getJobById(jobId: number): Promise<(Job & { id: number; project_id: number }) | null> {
    const result = await this.pool.query(`
      SELECT 
        id,
        project_id,
        slug,
        name,
        description,
        role,
        workflow_slug,
        inputs,
        outputs,
        automated,
        completed,
        paused,
        completed_at,
        last_processed_at,
        created_at,
        updated_at
      FROM jobs
      WHERE id = $1
    `, [jobId]);
    
    return result.rows[0] || null;
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
    const setClauses: string[] = [];
    const values: any[] = [jobId];
    let paramIndex = 2;

    if (updates.completed !== undefined) {
      setClauses.push(`completed = $${paramIndex++}`);
      values.push(updates.completed);
    }
    if (updates.paused !== undefined) {
      setClauses.push(`paused = $${paramIndex++}`);
      values.push(updates.paused);
    }
    if (updates.completed_at !== undefined) {
      setClauses.push(`completed_at = $${paramIndex++}`);
      values.push(updates.completed_at);
    }
    if (updates.last_processed_at !== undefined) {
      setClauses.push(`last_processed_at = $${paramIndex++}`);
      values.push(updates.last_processed_at);
    }

    if (setClauses.length === 0) return;

    await this.pool.query(`
      UPDATE jobs 
      SET ${setClauses.join(', ')}
      WHERE id = $1
    `, values);
  }

  // =====================================================
  // SQUADS & ROLES (for layout information)
  // =====================================================

  private async getSquads(
    client: PoolClient,
    projectId: number
  ): Promise<DatabaseSquad[]> {
    const result = await client.query(`
      SELECT 
        id,
        project_id,
        slug,
        name,
        description,
        color,
        created_at,
        updated_at
      FROM squads
      WHERE project_id = $1
      ORDER BY slug
    `, [projectId]);
    
    return result.rows;
  }

  private async getRoles(
    client: PoolClient,
    projectId: number
  ): Promise<DatabaseRole[]> {
    const result = await client.query(`
      SELECT 
        id,
        project_id,
        short_name,
        long_name,
        squad_slug,
        description_for_agent,
        created_at,
        updated_at
      FROM roles
      WHERE project_id = $1
      ORDER BY short_name
    `, [projectId]);
    
    return result.rows;
  }

  // =====================================================
  // UTILITY METHODS
  // =====================================================

  async checkProjectExists(projectId: number): Promise<boolean> {
    const result = await this.pool.query('SELECT id FROM projects WHERE id = $1', [projectId]);
    return result.rows.length > 0;
  }

  async getCollectionProgress(collectionId: number) {
    const result = await this.pool.query(`
      SELECT 
        dc.id,
        dc.slug,
        dc.name,
        COUNT(d.id) as total,
        COUNT(CASE WHEN d.status = 'done' THEN 1 END) as completed,
        COUNT(CASE WHEN d.status = 'in_progress' THEN 1 END) as in_progress,
        COUNT(CASE WHEN d.status = 'blocked' THEN 1 END) as blocked,
        COUNT(CASE WHEN d.status = 'ready' THEN 1 END) as ready
      FROM document_collections dc
      LEFT JOIN documents d ON dc.id = d.document_collection_id
      WHERE dc.id = $1
      GROUP BY dc.id, dc.slug, dc.name
    `, [collectionId]);
    
    return result.rows[0];
  }

  // =====================================================
  // CLEANUP
  // =====================================================

  async close(): Promise<void> {
    await this.pool.end();
  }
}