import { PrismaClient } from '../generated/prisma/index.js';
import { DocumentCollection, Job } from '../types/index.js';
import { JOB_TEMPLATES } from '../templates/jobs.js';

export class ProjectSeedingService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Seed a newly created project with initial document collections
   * based on job inputs/outputs from the template
   */
  async seedProjectGraph(projectId: number, templateJobs: string[]): Promise<void> {
    // Get the actual job templates selected for this project
    const selectedJobs = JOB_TEMPLATES.filter(job => templateJobs.includes(job.slug));
    
    // Extract all unique collection slugs from job inputs/outputs
    const collectionSlugs = this.extractCollectionSlugs(selectedJobs);
    
    // Create document collections
    await this.createDocumentCollections(projectId, collectionSlugs);
    
    // Create initial documents for some collections if needed
    await this.createInitialDocuments(projectId, collectionSlugs);
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
            name: this.slugToName(input.slug),
            description: input.description,
            documentType: this.inferDocumentType(input.slug)
          });
        }
      });
      
      // Process outputs
      job.outputs.forEach(output => {
        if (output.isCollection) {
          collections.set(output.slug, {
            slug: output.slug,
            name: this.slugToName(output.slug),
            description: output.description,
            documentType: this.inferDocumentType(output.slug)
          });
        }
      });
    });
    
    return collections;
  }

  /**
   * Create document collections using Prisma
   */
  private async createDocumentCollections(
    projectId: number,
    collectionSlugs: Map<string, CollectionMetadata>
  ): Promise<void> {
    const collectionsData = Array.from(collectionSlugs.values()).map(collection => ({
      project_id: projectId,
      slug: collection.slug,
      name: collection.name,
      description: collection.description,
      document_type: collection.documentType
    }));

    if (collectionsData.length > 0) {
      await this.prisma.documentCollection.createMany({
        data: collectionsData,
        skipDuplicates: true
      });
    }
  }

  /**
   * Create initial documents for certain collections (optional)
   */
  private async createInitialDocuments(
    projectId: number,
    collectionSlugs: Map<string, CollectionMetadata>
  ): Promise<void> {
    // Create sample documents for certain collection types
    const initialDocuments = [];

    for (const [slug, metadata] of collectionSlugs) {
      // Get the collection ID
      const collection = await this.prisma.documentCollection.findFirst({
        where: {
          project_id: projectId,
          slug: slug
        }
      });

      if (!collection) continue;

      // Create sample documents based on collection type
      if (metadata.documentType === 'feature') {
        initialDocuments.push({
          project_id: projectId,
          document_collection_id: collection.id,
          slug: `${slug}-sample-1`,
          name: `Sample ${metadata.name} Document`,
          content: `# Sample ${metadata.name}\n\nThis is a sample document for ${metadata.description}`,
          file_path: `/docs/${slug}/sample-1.md`,
          document_type: metadata.documentType,
          status: 'ready' as const,
          metadata: {}
        });
      }
    }

    if (initialDocuments.length > 0) {
      await this.prisma.document.createMany({
        data: initialDocuments,
        skipDuplicates: true
      });
    }
  }

  /**
   * Convert slug to human-readable name
   */
  private slugToName(slug: string): string {
    return slug
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Infer document type from collection slug
   */
  private inferDocumentType(slug: string): string {
    if (slug.includes('feature')) return 'feature';
    if (slug.includes('product')) return 'product_ticket';
    if (slug.includes('enhanced')) return 'enhanced_product_ticket';
    if (slug.includes('release')) return 'release';
    return 'generic';
  }

  async close(): Promise<void> {
    await this.prisma.$disconnect();
  }
}

interface CollectionMetadata {
  slug: string;
  name: string;
  description: string;
  documentType: string;
}