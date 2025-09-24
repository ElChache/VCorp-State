// VCorpState Project Templates
// These templates define complete project setups with roles, workflows, and jobs

import { ProjectTemplate, ProjectTemplateMetadata } from '../types/index.js';
import { ROLE_TEMPLATES } from './roles.js';
import { WORKFLOW_TEMPLATES } from './workflows.js';
import { JOB_TEMPLATES, JOB_SEQUENCES } from './jobs.js';

export const PROJECT_TEMPLATES: Record<string, ProjectTemplate> = {
  custom: {
    id: 'custom',
    name: 'Custom Project',
    description: 'Start with a blank project and add your own roles, workflows, and jobs',
    icon: '⚙️',
    roles: [],
    workflows: {},
    jobs: [],
    sequences: {}
  },

  vcorp_standard: {
    id: 'vcorp_standard', 
    name: 'VCorp Standard Project',
    description: 'Complete VCorp document transformation pipeline with all roles and workflows',
    icon: '🏢',
    roles: ROLE_TEMPLATES,
    workflows: WORKFLOW_TEMPLATES,
    jobs: JOB_TEMPLATES,
    sequences: JOB_SEQUENCES,
    features: [
      'Product Design workflow (PD)',
      'System Architecture workflow (SA)', 
      'Lead Development workflow (LD)',
      'Frontend/Backend/AI development',
      'Code review workflows',
      'QA testing workflow',
      'Complete document transformation pipeline',
      'State machine agent control'
    ]
  },

  development_only: {
    id: 'development_only',
    name: 'Development Only',
    description: 'Focused on development with minimal planning - great for small projects or prototypes',
    icon: '👩‍💻',
    roles: ROLE_TEMPLATES.filter(role => 
      ['fe', 'be', 'ai', 'ld', 'qa'].includes(role.short_name)
    ),
    workflows: {
      frontend_development: WORKFLOW_TEMPLATES.frontend_development,
      backend_development: WORKFLOW_TEMPLATES.backend_development,
      code_review: WORKFLOW_TEMPLATES.code_review,
      qa_testing: WORKFLOW_TEMPLATES.qa_testing
    },
    jobs: JOB_TEMPLATES.filter(job => 
      ['backend_development', 'frontend_development', 'ai_development', 'lead_code_review', 'qa_testing'].includes(job.id)
    ),
    sequences: {
      dev_pipeline: [
        ['backend_development', 'frontend_development', 'ai_development'],
        'lead_code_review',
        'qa_testing'
      ]
    },
    features: [
      'Frontend/Backend/AI development',
      'Lead developer code review',
      'QA testing',
      'Minimal overhead - jump straight to coding'
    ]
  },

  design_heavy: {
    id: 'design_heavy',
    name: 'Design-Heavy Project',
    description: 'Emphasis on thorough planning and documentation before development',
    icon: '📋',
    roles: ROLE_TEMPLATES.filter(role => 
      ['pd', 'sa', 'ld', 'fe', 'be'].includes(role.short_name)
    ),
    workflows: {
      document_creation: WORKFLOW_TEMPLATES.document_creation,
      frontend_development: WORKFLOW_TEMPLATES.frontend_development,
      backend_development: WORKFLOW_TEMPLATES.backend_development,
      code_review: WORKFLOW_TEMPLATES.code_review
    },
    jobs: JOB_TEMPLATES.filter(job => 
      ['create_features', 'create_product_tickets', 'create_architecture_tickets', 
       'create_development_tickets', 'frontend_development', 'backend_development', 
       'architecture_code_review', 'lead_code_review'].includes(job.id)
    ),
    sequences: {
      design_pipeline: [
        'create_features',
        'create_product_tickets', 
        'create_architecture_tickets',
        'create_development_tickets',
        ['frontend_development', 'backend_development'],
        ['architecture_code_review', 'lead_code_review']
      ]
    },
    features: [
      'Complete document creation pipeline',
      'Product design workflow',
      'System architecture planning',
      'Frontend/Backend development',
      'Dual code review (Architecture + Lead Dev)'
    ]
  },

  startup_mvp: {
    id: 'startup_mvp',
    name: 'Startup MVP',
    description: 'Fast-moving startup template with essential roles and streamlined workflows',
    icon: '🚀',
    roles: ROLE_TEMPLATES.filter(role => 
      ['pd', 'ld', 'fe', 'be', 'qa'].includes(role.short_name)
    ),
    workflows: {
      document_creation: WORKFLOW_TEMPLATES.document_creation,
      frontend_development: WORKFLOW_TEMPLATES.frontend_development,
      backend_development: WORKFLOW_TEMPLATES.backend_development,
      code_review: WORKFLOW_TEMPLATES.code_review,
      qa_testing: WORKFLOW_TEMPLATES.qa_testing
    },
    jobs: JOB_TEMPLATES.filter(job => 
      ['create_features', 'create_product_tickets', 'create_development_tickets',
       'frontend_development', 'backend_development', 'lead_code_review', 'qa_testing'].includes(job.id)
    ),
    sequences: {
      mvp_pipeline: [
        'create_features',
        'create_product_tickets',
        'create_development_tickets', 
        ['frontend_development', 'backend_development'],
        'lead_code_review',
        'qa_testing'
      ]
    },
    features: [
      'Streamlined feature creation',
      'Product ticket planning', 
      'Skip architecture phase for speed',
      'Frontend/Backend development',
      'Single code review (Lead Dev)',
      'QA testing'
    ]
  }
};

// Template metadata for UI selection
export const TEMPLATE_METADATA: ProjectTemplateMetadata[] = Object.values(PROJECT_TEMPLATES).map(template => ({
  id: template.id,
  name: template.name,
  description: template.description,
  icon: template.icon,
  features: template.features,
  roleCount: template.roles.length,
  workflowCount: Object.keys(template.workflows).length,
  jobCount: template.jobs.length
}));