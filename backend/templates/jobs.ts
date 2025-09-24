// VCorpState Job Templates
// These jobs define the document transformation pipeline with inputs, outputs, and workflows

import { Job } from '../types/index.js';

export const JOB_TEMPLATES: Job[] = [
  {
    slug: 'product_strategy_design',
    name: 'Product Strategy & Feature Design',
    description: 'Strategic product design process: research, personas, and feature definition from release vision',
    role: 'pd', // Product Designer
    workflow_slug: 'product_design',
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
        max_count: null
      }
    ],
    requires_approval: true, // Stakeholder review required
    auto_start: true,
    priority: 1
  },

  {
    slug: 'create_product_tickets',
    name: 'Create Product Tickets from Features',
    description: 'Break down features into specific, actionable product tickets with clear acceptance criteria',
    role: 'pd', // Product Designer
    workflow_slug: 'ticket_creation',
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
        description: 'Product tickets defining specific user-facing functionality with acceptance criteria',
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
    slug: 'create_architecture_tickets',
    name: 'Create Architecture Tickets',
    description: 'Transform product tickets into architecture tickets defining technical implementation approach',
    role: 'sa', // System Architect
    workflow_slug: 'document_creation',
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
    slug: 'create_development_tickets',
    name: 'Create Development Tickets',
    description: 'Break architecture tickets into role-specific development tickets',
    role: 'ld', // Lead Developer
    workflow_slug: 'document_creation',
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
    slug: 'create_sub_tickets',
    name: 'Create Sub-tickets',
    description: 'Break development tickets into granular implementation sub-tickets',
    role: ['fe', 'be', 'ai'], // Any developer role
    workflow_slug: 'document_creation',
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
    slug: 'backend_development',
    name: 'Backend Development',
    description: 'Implement backend functionality from sub-tickets',
    role: 'be', // Backend Developer
    workflow_slug: 'backend_development',
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
    slug: 'frontend_development',
    name: 'Frontend Development', 
    description: 'Implement frontend functionality from sub-tickets',
    role: 'fe', // Frontend Developer
    workflow_slug: 'frontend_development',
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
    slug: 'ai_development',
    name: 'AI Development',
    description: 'Implement AI/ML functionality from sub-tickets', 
    role: 'ai', // AI Developer
    workflow_slug: 'backend_development', // Reuse backend workflow for now
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
    slug: 'architecture_code_review',
    name: 'Architecture Code Review',
    description: 'System architects review code changes for architectural compliance',
    role: 'sa', // System Architect (reviewer role)
    workflow_slug: 'code_review',
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
    slug: 'lead_code_review',
    name: 'Lead Developer Code Review',
    description: 'Lead developers review code changes for technical quality and standards',
    role: 'ld', // Lead Developer (reviewer role) 
    workflow_slug: 'code_review',
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
    slug: 'qa_testing',
    name: 'QA Testing',
    description: 'Test completed features to ensure they meet requirements',
    role: 'qa', // QA Engineer
    workflow_slug: 'qa_testing',
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

// Dependencies emerge naturally from job input/output document chains
// No explicit sequences needed