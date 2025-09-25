import { Pool, PoolClient } from 'pg';
import {
  GraphData,
  CollectionNode,
  JobNode,
  GraphEdge,
  GraphLayout,
  SquadColumn,
  CollectionDetails,
  JobDetails,
  DocumentSummary,
  AgentInfo
} from '../types/index.js';
import { LayoutEngine } from './layout.js';

export class GraphService {
  private layoutEngine: LayoutEngine;
  
  constructor(private pool: Pool) {
    this.layoutEngine = new LayoutEngine();
  }

  /**
   * Generate complete graph data for a project
   */
  async getProjectGraph(projectId: number): Promise<GraphData> {
    const collections = await this.getCollectionNodes(projectId);
    const jobs = await this.getJobNodes(projectId);
    const edges = await this.generateEdges(collections, jobs, projectId);
    const layout = this.layoutEngine.generateLayout(collections, jobs, edges);

    return {
      nodes: [...collections, ...jobs],
      edges,
      layout
    };
  }

  /**
   * Get collection nodes with progress data
   */
  private async getCollectionNodes(projectId: number): Promise<CollectionNode[]> {
    const sql = `
      SELECT 
        dc.id,
        dc.slug,
        dc.name,
        dc.description,
        dc.document_type,
        COUNT(d.id) as total_documents,
        COUNT(CASE WHEN d.status = 'done' THEN 1 END) as completed_documents,
        COUNT(CASE WHEN d.status = 'in_progress' THEN 1 END) as in_progress_documents,
        COUNT(CASE WHEN d.status = 'blocked' THEN 1 END) as blocked_documents
      FROM document_collections dc
      LEFT JOIN documents d ON dc.id = d.document_collection_id
      WHERE dc.project_id = $1
      GROUP BY dc.id, dc.slug, dc.name, dc.description, dc.document_type
    `;

    const result = await this.pool.query(sql, [projectId]);
    const collections = result.rows;
    
    const collectionNodes: CollectionNode[] = [];
    
    for (const collection of collections) {
      const status = this.determineCollectionStatus(collection);
      const documents = await this.getDocumentSummaries(collection.id);
      
      collectionNodes.push({
        id: `collection-${collection.slug}`,
        type: 'collection' as const,
        position: { x: 0, y: 0 }, // Will be set by LayoutEngine
        data: {
          slug: collection.slug,
          name: collection.name,
          status,
          progress: {
            completed: collection.completed_documents || 0,
            total: collection.total_documents || 0
          },
          documents,
          file_path: `.vcorp/${collection.slug}/`
        }
      });
    }
    
    return collectionNodes;
  }

  /**
   * Get job nodes with execution status
   */
  private async getJobNodes(projectId: number): Promise<JobNode[]> {
    const sql = `
      SELECT 
        j.id,
        j.slug,
        j.name,
        j.description,
        j.role,
        j.automated,
        j.completed,
        j.paused,
        j.completed_at,
        j.last_processed_at,
        s.name as squad_name,
        s.color as squad_color
      FROM jobs j
      LEFT JOIN roles r ON j.role = r.short_name AND r.project_id = $1
      LEFT JOIN squads s ON r.squad_slug = s.slug AND s.project_id = $2
      WHERE j.project_id = $3
      ORDER BY j.id
    `;

    const result = await this.pool.query(sql, [projectId, projectId, projectId]);
    const jobs = result.rows;
    
    return jobs.map((job, index) => {
      const status = this.determineJobStatus(job);
      
      return {
        id: `job-${job.slug}`,
        type: 'job' as const,
        position: { x: 0, y: 0 }, // Will be set by LayoutEngine
        data: {
          slug: job.slug,
          name: job.name,
          role: job.role,
          squad: job.squad_name || 'Unknown Squad',
          status,
          automated: job.automated,
          duration: this.calculateJobDuration(job)
        }
      };
    });
  }

  /**
   * Generate edges between collections and jobs
   */
  private async generateEdges(collections: CollectionNode[], jobs: JobNode[], projectId: number): Promise<GraphEdge[]> {
    const edges: GraphEdge[] = [];
    const edgeId = (source: string, target: string) => `${source}-${target}`;

    // Get job input/output relationships from job templates
    const jobInputOutputSql = `
      SELECT 
        j.slug as job_slug,
        j.inputs,
        j.outputs
      FROM jobs j
      WHERE j.project_id = $1
    `;

    const jobRelationsResult = await this.pool.query(jobInputOutputSql, [projectId]);
    const jobRelations = jobRelationsResult.rows;

    jobRelations.forEach(job => {
      const inputs = JSON.parse(job.inputs || '[]');
      const outputs = JSON.parse(job.outputs || '[]');
      const jobNodeId = `job-${job.job_slug}`;

      // Input edges: collection -> job
      inputs.forEach((input: any) => {
        if (input.isCollection) {
          const collectionNodeId = `collection-${input.slug}`;
          edges.push({
            id: edgeId(collectionNodeId, jobNodeId),
            source: collectionNodeId,
            target: jobNodeId,
            type: 'transformation',
            data: { label: 'input', description: input.description }
          });
        }
      });

      // Output edges: job -> collection
      outputs.forEach((output: any) => {
        if (output.isCollection) {
          const collectionNodeId = `collection-${output.slug}`;
          edges.push({
            id: edgeId(jobNodeId, collectionNodeId),
            source: jobNodeId,
            target: collectionNodeId,
            type: 'transformation',
            data: { label: 'output', description: output.description }
          });
        }
      });
    });

    // Add document dependency edges within collections
    const docDependencySql = `
      SELECT 
        d1.slug as source_slug,
        d2.slug as target_slug,
        dc1.slug as collection_slug
      FROM documents d1
      JOIN documents d2 ON d2.blocked_by::jsonb ? d1.slug
      JOIN document_collections dc1 ON d1.document_collection_id = dc1.id
      WHERE d1.project_id = $1 AND d2.project_id = $2
    `;

    const docDependenciesResult = await this.pool.query(docDependencySql, [projectId, projectId]);
    const docDependencies = docDependenciesResult.rows;
    
    docDependencies.forEach(dep => {
      edges.push({
        id: edgeId(`doc-${dep.source_slug}`, `doc-${dep.target_slug}`),
        source: `doc-${dep.source_slug}`,
        target: `doc-${dep.target_slug}`,
        type: 'dependency',
        data: { label: 'blocks' }
      });
    });

    return edges;
  }


  /**
   * Get detailed collection information for modals
   */
  async getCollectionDetails(collectionId: number): Promise<CollectionDetails> {
    const collectionSql = `
      SELECT * FROM document_collections WHERE id = $1
    `;
    
    const documentsSql = `
      SELECT * FROM documents WHERE document_collection_id = $1 ORDER BY created_at DESC
    `;

    const collectionResult = await this.pool.query(collectionSql, [collectionId]);
    const documentsResult = await this.pool.query(documentsSql, [collectionId]);
    
    const collection = collectionResult.rows[0];
    const documents = documentsResult.rows;

    const progress = {
      completed: documents.filter(d => d.status === 'done').length,
      total: documents.length,
      blocked: documents.filter(d => d.status === 'blocked').length,
      in_progress: documents.filter(d => d.status === 'in_progress').length
    };

    const file_paths = documents.map(d => d.file_path).filter(Boolean);

    return {
      collection,
      documents,
      progress,
      file_paths,
      last_updated: collection.updated_at
    };
  }

  /**
   * Get detailed job information for modals
   */
  async getJobDetails(jobId: number): Promise<JobDetails> {
    const jobSql = `
      SELECT * FROM jobs WHERE id = $1
    `;

    const snapshotsSql = `
      SELECT * FROM job_document_snapshots WHERE job_id = $1 ORDER BY processed_at DESC
    `;

    const jobResult = await this.pool.query(jobSql, [jobId]);
    const snapshotsResult = await this.pool.query(snapshotsSql, [jobId]);
    
    const job = jobResult.rows[0];
    const snapshots = snapshotsResult.rows;

    // TODO: Add agent info and execution logs when agent system is implemented
    const agent: AgentInfo | undefined = undefined;
    const execution_log: string[] = [];
    
    return {
      job,
      agent,
      input_collections: [],
      output_collections: [],
      execution_log,
      duration: this.calculateJobDuration(job),
      snapshots
    };
  }

  // Helper methods
  private async getDocumentSummaries(collectionId: number): Promise<DocumentSummary[]> {
    const sql = `
      SELECT id, slug, name, status, assigned_to_role, picked_by_agent_id
      FROM documents 
      WHERE document_collection_id = $1
      ORDER BY created_at DESC
      LIMIT 10
    `;

    const result = await this.pool.query(sql, [collectionId]);
    return result.rows as DocumentSummary[];
  }

  private determineCollectionStatus(collection: any): 'blocked' | 'ready' | 'in_progress' | 'done' {
    if (collection.total_documents === 0) return 'ready';
    if (collection.completed_documents === collection.total_documents) return 'done';
    if (collection.in_progress_documents > 0) return 'in_progress';
    if (collection.blocked_documents > 0) return 'blocked';
    return 'ready';
  }

  private determineJobStatus(job: any): 'waiting' | 'running' | 'completed' | 'paused' {
    if (job.paused) return 'paused';
    if (job.completed) return 'completed';
    if (job.last_processed_at) return 'running';
    return 'waiting';
  }

  private calculateJobDuration(job: any): string {
    if (!job.last_processed_at) return '0s';
    
    const start = new Date(job.last_processed_at);
    const end = job.completed_at ? new Date(job.completed_at) : new Date();
    const diffMs = end.getTime() - start.getTime();
    
    const minutes = Math.floor(diffMs / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);
    
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
  }

}