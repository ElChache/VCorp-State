import { Pool, PoolClient } from 'pg';
import { DocumentCollection, Job } from '../types/index.js';
import { JOB_TEMPLATES } from '../templates/jobs.js';

export class ProjectSeedingService {
  constructor(private pool: Pool) {}

  /**
   * Seed a newly created project with initial document collections
   * based on job inputs/outputs from the template
   */
  async seedProjectGraph(
    projectId: number, 
    templateJobs: string[], 
    client?: PoolClient
  ): Promise<void> {
    
    const dbClient = client || await this.pool.connect();
    const shouldReleaseClient = !client;
    
    try {
      // Get the actual job templates selected for this project
      const selectedJobs = JOB_TEMPLATES.filter(job => templateJobs.includes(job.slug));
      
      // Extract all unique collection slugs from job inputs/outputs
      const collectionSlugs = this.extractCollectionSlugs(selectedJobs);
      
      // Create document collections
      await this.createDocumentCollections(projectId, collectionSlugs, dbClient);
      
      // Create initial documents for some collections if needed
      await this.createInitialDocuments(projectId, collectionSlugs, dbClient);
      
    } finally {
      if (shouldReleaseClient) {
        dbClient.release();
      }
    }
  }

  /**
   * Extract unique collection slugs from job inputs/outputs
   */
  private extractCollectionSlugs(jobs: Job[]): Map<string, CollectionMetadata> {
    const collections = new Map<string, CollectionMetadata>();
    
    jobs.forEach(job => {
      // Process inputs
      job.inputs.forEach(input => {
        if (input.isCollection) {
          collections.set(input.slug, {
            slug: input.slug,
            name: this.generateCollectionName(input.slug),
            description: input.description,
            document_type: this.inferDocumentType(input.slug)
          });
        }
      });
      
      // Process outputs
      job.outputs.forEach(output => {
        if (output.isCollection) {
          collections.set(output.slug, {
            slug: output.slug,
            name: this.generateCollectionName(output.slug),
            description: output.description,
            document_type: this.inferDocumentType(output.slug)
          });
        }
      });
    });
    
    return collections;
  }

  /**
   * Create document collection records in database
   */
  private async createDocumentCollections(
    projectId: number,
    collections: Map<string, CollectionMetadata>,
    client: PoolClient
  ): Promise<void> {
    
    if (collections.size === 0) return;
    
    const collectionValues = Array.from(collections.values());
    const insertValues = collectionValues.map((_, index) => 
      `($${index * 5 + 1}, $${index * 5 + 2}, $${index * 5 + 3}, $${index * 5 + 4}, $${index * 5 + 5})`
    ).join(', ');
    
    const flatValues = collectionValues.flatMap(collection => [
      projectId,
      collection.slug,
      collection.name,
      collection.description,
      collection.document_type
    ]);
    
    await client.query(
      `INSERT INTO document_collections (project_id, slug, name, description, document_type)
       VALUES ${insertValues}
       ON CONFLICT (project_id, slug) DO NOTHING`,
      flatValues
    );
  }

  /**
   * Create initial documents for certain collections
   */
  private async createInitialDocuments(
    projectId: number,
    collections: Map<string, CollectionMetadata>,
    client: PoolClient
  ): Promise<void> {
    
    // Create placeholder release document if releases collection exists
    if (collections.has('releases')) {
      await this.createInitialReleaseDocument(projectId, client);
    }
    
    // Other initial documents can be added here as needed
  }

  /**
   * Create an initial placeholder release document
   */
  private async createInitialReleaseDocument(
    projectId: number,
    client: PoolClient
  ): Promise<void> {
    
    // Get the releases collection ID
    const collectionResult = await client.query(
      'SELECT id FROM document_collections WHERE project_id = $1 AND slug = $2',
      [projectId, 'releases']
    );
    
    if (collectionResult.rows.length === 0) return;
    
    const collectionId = collectionResult.rows[0].id;
    const filePath = `.vcorp/releases/initial-release.md`;
    
    const initialContent = `# Initial Release

## Overview
This is a placeholder release document. Replace this content with your actual release requirements.

## Features
- Feature planning will be added here
- Additional features as needed

## Success Criteria
- Define what success looks like for this release

## Timeline
- Set target dates and milestones
`;
    
    await client.query(
      `INSERT INTO documents (
        project_id, 
        document_collection_id, 
        slug, 
        name, 
        content, 
        file_path, 
        document_type, 
        blocked_by, 
        status, 
        metadata
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (project_id, slug) DO NOTHING`,
      [
        projectId,
        collectionId,
        'initial-release',
        'Initial Release',
        initialContent,
        filePath,
        'release',
        JSON.stringify([]), // No blocks initially
        'ready',           // Ready for processing
        JSON.stringify({})  // Empty metadata
      ]
    );
  }

  // Helper methods
  private generateCollectionName(slug: string): string {
    return slug
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private inferDocumentType(slug: string): string {
    // Map collection slugs to document types
    const typeMap: Record<string, string> = {
      'releases': 'release',
      'features': 'feature', 
      'product_tickets': 'product_ticket',
      'enhanced_product_tickets': 'enhanced_product_ticket',
      'fe_tickets': 'fe_ticket',
      'be_tickets': 'be_ticket',
      'ai_tickets': 'ai_ticket',
      'fe_subtickets': 'fe_subticket',
      'be_subtickets': 'be_subticket',
      'ai_subtickets': 'ai_subticket'
    };
    
    return typeMap[slug] || slug.replace('s', ''); // Remove trailing 's' as fallback
  }
}

interface CollectionMetadata {
  slug: string;
  name: string;
  description: string;
  document_type: string;
}