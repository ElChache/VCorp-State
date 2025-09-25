import { 
  createPool, 
  sql, 
  type DatabasePool, 
  type DatabaseConnection 
} from 'slonik';
import {
  DatabaseDocument,
  DatabaseDocumentCollection,
  Job,
  DatabaseSquad,
  DatabaseRole
} from '../types/index.js';

export class DatabaseService {
  private pool: DatabasePool;

  constructor(connectionString: string) {
    this.pool = createPool(connectionString);
  }

  // =====================================================
  // PROJECT DATA FETCHING (for initial graph load)
  // =====================================================

  async getProjectInitialData(projectId: number) {
    return await this.pool.connect(async (connection) => {
      const [collections, documents, jobs, squads, roles] = await Promise.all([
        this.getDocumentCollections(connection, projectId),
        this.getDocuments(connection, projectId),
        this.getJobs(connection, projectId),
        this.getSquads(connection, projectId),
        this.getRoles(connection, projectId)
      ]);

      return {
        collections,
        documents,
        jobs,
        squads,
        roles,
        timestamp: Date.now()
      };
    });
  }

  // =====================================================
  // DOCUMENT COLLECTIONS
  // =====================================================

  private async getDocumentCollections(
    connection: DatabaseConnection, 
    projectId: number
  ): Promise<DatabaseDocumentCollection[]> {
    return await connection.many(sql.unsafe`
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
      WHERE project_id = ${projectId}
      ORDER BY slug
    `);
  }

  async getCollectionById(collectionId: number): Promise<DatabaseDocumentCollection | null> {
    return await this.pool.connect(async (connection) => {
      return await connection.maybeOne(sql.unsafe`
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
        WHERE id = ${collectionId}
      `);
    });
  }

  // =====================================================
  // DOCUMENTS
  // =====================================================

  private async getDocuments(
    connection: DatabaseConnection,
    projectId: number
  ): Promise<DatabaseDocument[]> {
    return await connection.many(sql.unsafe`
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
      WHERE project_id = ${projectId}
      ORDER BY created_at DESC
    `);
  }

  async getDocumentsByCollection(collectionId: number): Promise<DatabaseDocument[]> {
    return await this.pool.connect(async (connection) => {
      return await connection.many(sql.unsafe`
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
        WHERE document_collection_id = ${collectionId}
        ORDER BY created_at DESC
      `);
    });
  }

  async updateDocumentStatus(
    documentId: number, 
    status: 'blocked' | 'ready' | 'in_progress' | 'done',
    agentId?: string
  ): Promise<void> {
    await this.pool.connect(async (connection) => {
      await connection.query(sql.unsafe`
        UPDATE documents 
        SET 
          status = ${status},
          picked_by_agent_id = ${agentId || null},
          last_updated_at = NOW()
        WHERE id = ${documentId}
      `);
    });
  }

  // =====================================================
  // JOBS
  // =====================================================

  private async getJobs(
    connection: DatabaseConnection,
    projectId: number
  ): Promise<(Job & { id: number; project_id: number })[]> {
    return await connection.many(sql.unsafe`
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
      WHERE project_id = ${projectId}
      ORDER BY slug
    `);
  }

  async getJobById(jobId: number): Promise<(Job & { id: number; project_id: number }) | null> {
    return await this.pool.connect(async (connection) => {
      return await connection.maybeOne(sql.unsafe`
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
        WHERE id = ${jobId}
      `);
    });
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
    if (Object.keys(updates).length === 0) return;
    
    await this.pool.connect(async (connection) => {
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
      
      await connection.query(sql.unsafe`
        UPDATE jobs 
        SET ${sql.raw(setClauses.join(', '))}
        WHERE id = $1
      `, values);
    });
  }

  // =====================================================
  // SQUADS & ROLES (for layout information)
  // =====================================================

  private async getSquads(
    connection: DatabaseConnection,
    projectId: number
  ): Promise<DatabaseSquad[]> {
    return await connection.many(sql.unsafe`
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
      WHERE project_id = ${projectId}
      ORDER BY slug
    `);
  }

  private async getRoles(
    connection: DatabaseConnection,
    projectId: number
  ): Promise<DatabaseRole[]> {
    return await connection.many(sql.unsafe`
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
      WHERE project_id = ${projectId}
      ORDER BY short_name
    `);
  }

  // =====================================================
  // UTILITY METHODS
  // =====================================================

  async checkProjectExists(projectId: number): Promise<boolean> {
    return await this.pool.connect(async (connection) => {
      const result = await connection.maybeOne(sql.unsafe`
        SELECT id FROM projects WHERE id = ${projectId}
      `);
      return result !== null;
    });
  }

  async getCollectionProgress(collectionId: number) {
    return await this.pool.connect(async (connection) => {
      return await connection.one(sql.unsafe`
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
        WHERE dc.id = ${collectionId}
        GROUP BY dc.id, dc.slug, dc.name
      `);
    });
  }

  // =====================================================
  // CLEANUP
  // =====================================================

  async close(): Promise<void> {
    await this.pool.end();
  }
}