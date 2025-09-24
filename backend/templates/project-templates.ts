// VCorpState Project Templates
// These templates define complete project setups with roles, workflows, and jobs

import { ProjectTemplate, ProjectTemplateMetadata } from '../types/index.js';
import { SQUAD_TEMPLATES } from './squads.js';
import { ROLE_TEMPLATES } from './roles.js';
import { WORKFLOW_TEMPLATES } from './workflows.js';
import { JOB_TEMPLATES } from './jobs.js';

export const PROJECT_TEMPLATES: Record<string, ProjectTemplate> = {
  vcorp_standard: {
    id: 'vcorp_standard', 
    name: 'VCorp Standard Project',
    description: 'Complete VCorp document transformation pipeline with all roles and workflows',
    icon: '🏢',
    squads: SQUAD_TEMPLATES,
    roles: ROLE_TEMPLATES,
    workflows: WORKFLOW_TEMPLATES,
    jobs: [
      'product_strategy_design',
      'create_product_tickets',
      'create_architecture_tickets',
      'create_development_tickets', 
      'create_sub_tickets',
      'backend_development',
      'frontend_development',
      'ai_development',
      'architecture_code_review',
      'lead_code_review',
      'qa_testing'
    ],
    // Dependencies emerge from job input/output chains
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
  }
};

// Template metadata for UI selection
export const TEMPLATE_METADATA: ProjectTemplateMetadata[] = Object.values(PROJECT_TEMPLATES).map(template => ({
  id: template.id,
  name: template.name,
  description: template.description,
  icon: template.icon,
  features: template.features,
  squadCount: template.squads.length,
  roleCount: template.roles.length,
  workflowCount: Object.keys(template.workflows).length,
  jobCount: template.jobs.length
}));