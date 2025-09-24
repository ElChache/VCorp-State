// VCorpState Job Templates
// These jobs define the document transformation pipeline with inputs, outputs, and workflows

import { Job } from '../types/index.js';

export const JOB_TEMPLATES: Job[] = [
  {
    id: 'create_features',
    name: 'Create Features from Release',
    description: 'Transform release document into feature documents that define the product capabilities',
    role: 'pd', // Product Designer
    workflow_id: 'document_creation',
    inputs: [
      {
        type: 'release',
        description: 'Release document describing the overall product vision and requirements',
        required: true,
        min_count: 1,
        max_count: 1
      }
    ],
    outputs: [
      {
        type: 'feature', 
        description: 'Feature documents describing specific product capabilities',
        required: true,
        min_count: 1,
        max_count: null // unlimited
      }
    ],
    requires_approval: false,
    auto_start: true,
    priority: 1
  },

  {
    id: 'create_product_tickets',
    name: 'Create Product Tickets from Features',
    description: 'Break down features into specific product tickets that define user-facing functionality',
    role: 'pd', // Product Designer
    workflow_id: 'document_creation', 
    inputs: [
      {
        type: 'feature',
        description: 'Feature documents to be broken down into product tickets',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    outputs: [
      {
        type: 'product_ticket',
        description: 'Product tickets defining specific user-facing functionality',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    requires_approval: false,
    auto_start: true,
    priority: 2
  },

  {
    id: 'create_architecture_tickets',
    name: 'Create Architecture Tickets',
    description: 'Transform product tickets into architecture tickets defining technical implementation approach',
    role: 'sa', // System Architect
    workflow_id: 'document_creation',
    inputs: [
      {
        type: 'product_ticket',
        description: 'Product tickets to be analyzed for architectural requirements',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    outputs: [
      {
        type: 'architecture_ticket',
        description: 'Architecture tickets defining technical implementation approach',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    requires_approval: false,
    auto_start: true,
    priority: 3
  },

  {
    id: 'create_development_tickets',
    name: 'Create Development Tickets',
    description: 'Break architecture tickets into role-specific development tickets',
    role: 'ld', // Lead Developer
    workflow_id: 'document_creation',
    inputs: [
      {
        type: 'architecture_ticket',
        description: 'Architecture tickets to be broken down by technology stack',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    outputs: [
      {
        type: 'development_ticket',
        description: 'Role-specific development tickets (fe, be, ai) with technical specifications',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    requires_approval: false,
    auto_start: true,
    priority: 4
  },

  {
    id: 'create_sub_tickets',
    name: 'Create Sub-tickets',
    description: 'Break development tickets into granular implementation sub-tickets',
    role: ['fe', 'be', 'ai'], // Any developer role
    workflow_id: 'document_creation',
    inputs: [
      {
        type: 'development_ticket',
        description: 'Development tickets assigned to your role to be broken into sub-tasks',
        required: true,
        min_count: 1,
        max_count: null,
        filter_by_role: true
      }
    ],
    outputs: [
      {
        type: 'sub_ticket',
        description: 'Granular implementation tasks with specific acceptance criteria',
        required: true,
        min_count: 1,
        max_count: null
      }
    ],
    requires_approval: false,
    auto_start: true,
    priority: 5
  },

  {
    id: 'backend_development',
    name: 'Backend Development',
    description: 'Implement backend functionality from sub-tickets',
    role: 'be', // Backend Developer
    workflow_id: 'backend_development',
    inputs: [
      {
        type: 'sub_ticket',
        description: 'Backend sub-tickets ready for implementation',
        required: true,
        min_count: 1,
        max_count: null,
        filter_by_role: true,
        status: 'ready'
      }
    ],
    outputs: [], // No document outputs - produces code
    requires_approval: false,
    auto_start: true,
    priority: 6
  },

  {
    id: 'frontend_development',
    name: 'Frontend Development', 
    description: 'Implement frontend functionality from sub-tickets',
    role: 'fe', // Frontend Developer
    workflow_id: 'frontend_development',
    inputs: [
      {
        type: 'sub_ticket',
        description: 'Frontend sub-tickets ready for implementation',
        required: true,
        min_count: 1,
        max_count: null,
        filter_by_role: true,
        status: 'ready'
      }
    ],
    outputs: [], // No document outputs - produces code
    requires_approval: false,
    auto_start: true,
    priority: 6
  },

  {
    id: 'ai_development',
    name: 'AI Development',
    description: 'Implement AI/ML functionality from sub-tickets', 
    role: 'ai', // AI Developer
    workflow_id: 'backend_development', // Reuse backend workflow for now
    inputs: [
      {
        type: 'sub_ticket',
        description: 'AI sub-tickets ready for implementation',
        required: true,
        min_count: 1,
        max_count: null,
        filter_by_role: true,
        status: 'ready'
      }
    ],
    outputs: [], // No document outputs - produces code
    requires_approval: false,
    auto_start: true,
    priority: 6
  },

  {
    id: 'architecture_code_review',
    name: 'Architecture Code Review',
    description: 'System architects review code changes for architectural compliance',
    role: 'sa', // System Architect (reviewer role)
    workflow_id: 'code_review',
    inputs: [
      {
        type: 'pull_request',
        description: 'Pull requests that need architectural review',
        required: true,
        min_count: 1,
        max_count: null,
        status: 'needs_review'
      }
    ],
    outputs: [], // No document outputs - changes PR status
    requires_approval: false,
    auto_start: true,
    priority: 7
  },

  {
    id: 'lead_code_review',
    name: 'Lead Developer Code Review',
    description: 'Lead developers review code changes for technical quality and standards',
    role: 'ld', // Lead Developer (reviewer role) 
    workflow_id: 'code_review',
    inputs: [
      {
        type: 'pull_request',
        description: 'Pull requests that need technical review',
        required: true,
        min_count: 1,
        max_count: null,
        status: 'needs_review'
      }
    ],
    outputs: [], // No document outputs - changes PR status
    requires_approval: false,
    auto_start: true,
    priority: 7
  },

  {
    id: 'qa_testing',
    name: 'QA Testing',
    description: 'Test completed features to ensure they meet requirements',
    role: 'qa', // QA Engineer
    workflow_id: 'qa_testing',
    inputs: [
      {
        type: 'completed_ticket',
        description: 'Tickets that have been implemented and reviewed, ready for testing',
        required: true,
        min_count: 1,
        max_count: null,
        status: 'needs_qa'
      }
    ],
    outputs: [], // No document outputs - changes ticket status
    requires_approval: false,
    auto_start: true,
    priority: 8
  }
];

// Job sequences define the dependency order
export const JOB_SEQUENCES: Record<string, (string | string[])[]> = {
  main_pipeline: [
    'create_features',
    'create_product_tickets', 
    'create_architecture_tickets',
    'create_development_tickets',
    'create_sub_tickets',
    ['backend_development', 'frontend_development', 'ai_development'], // Parallel
    ['architecture_code_review', 'lead_code_review'], // Parallel
    'qa_testing'
  ]
};