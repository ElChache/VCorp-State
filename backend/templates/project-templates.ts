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
      'enhance_product_tickets',
      'create_fe_tickets',
      'create_be_tickets', 
      'create_ai_tickets',
      'create_fe_subtickets',
      'create_be_subtickets',
      'create_ai_subtickets',
      'develop_fe_subtickets',
      'develop_be_subtickets',
      'develop_ai_subtickets',
      'review_fe_subtickets',
      'review_be_subtickets',
      'review_ai_subtickets',
      'qa_review_product_tickets'
    ],
    // Dependencies emerge from job input/output chains
    features: [
      'Product Designer creates features and product tickets',
      'System Architect enhances tickets with technical contracts', 
      'Parallel FE/BE/AI lead ticket creation',
      'Squad-based sub-ticket breakdown and development',
      'Role-specific code review by leads',
      'QA review of completed product tickets',
      'Document collection organization',
      'Automated job flow with manual intervention controls',
      'Complete document transformation pipeline'
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