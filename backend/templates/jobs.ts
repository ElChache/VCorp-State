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
        isCollection: false,
        slug: 'release',
        description: 'Release document describing the overall product vision and requirements'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'features',
        description: 'Collection of feature documents describing specific product capabilities'
      }
    ],
    automated: false, // Requires manual approval
    completed: false,
    paused: false
  },

  {
    slug: 'create_product_tickets',
    name: 'Create Product Tickets from Features',
    description: 'Break down features into specific, actionable product tickets with clear acceptance criteria',
    role: 'pd', // Product Designer
    workflow_slug: 'ticket_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'features',
        description: 'Feature collection to be broken down into product tickets'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'product_tickets',
        description: 'Collection of product tickets defining specific user-facing functionality'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'enhance_product_tickets',
    name: 'Enhance Product Tickets with Technical Contracts',
    description: 'Enhance product tickets with technical contracts, API specifications, and integration details',
    role: 'sa', // System Architect
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'product_tickets',
        description: 'Collection of product tickets to be enhanced with technical contracts'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'enhanced_product_tickets',
        description: 'Enhanced product tickets with technical contracts enabling parallel development'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'create_fe_tickets',
    name: 'Create Frontend Tickets',
    description: 'Create frontend-specific tickets from enhanced product tickets',
    role: 'fe_lead', // Frontend Lead
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'enhanced_product_tickets',
        description: 'Enhanced product tickets with technical contracts'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'fe_tickets',
        description: 'Frontend tickets with UI/UX specifications and API integration details'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'create_be_tickets',
    name: 'Create Backend Tickets',
    description: 'Create backend-specific tickets from enhanced product tickets',
    role: 'be_lead', // Backend Lead
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'enhanced_product_tickets',
        description: 'Enhanced product tickets with technical contracts'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'be_tickets',
        description: 'Backend tickets with API specifications and database requirements'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'create_ai_tickets',
    name: 'Create AI Tickets',
    description: 'Create AI-specific tickets from enhanced product tickets',
    role: 'ai_lead', // AI Lead
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'enhanced_product_tickets',
        description: 'Enhanced product tickets with technical contracts'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'ai_tickets',
        description: 'AI tickets with ML model specifications and integration requirements'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'create_fe_subtickets',
    name: 'Create Frontend Sub-tickets',
    description: 'Break frontend tickets into granular implementation sub-tickets',
    role: 'fe_lead', // Frontend Lead
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'fe_tickets',
        description: 'Frontend tickets to be broken into sub-tasks'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'fe_subtickets',
        description: 'Granular frontend implementation tasks'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'create_be_subtickets',
    name: 'Create Backend Sub-tickets',
    description: 'Break backend tickets into granular implementation sub-tickets',
    role: 'be_lead', // Backend Lead
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'be_tickets',
        description: 'Backend tickets to be broken into sub-tasks'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'be_subtickets',
        description: 'Granular backend implementation tasks'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'create_ai_subtickets',
    name: 'Create AI Sub-tickets',
    description: 'Break AI tickets into granular implementation sub-tickets',
    role: 'ai_lead', // AI Lead
    workflow_slug: 'document_creation',
    inputs: [
      {
        isCollection: true,
        slug: 'ai_tickets',
        description: 'AI tickets to be broken into sub-tasks'
      }
    ],
    outputs: [
      {
        isCollection: true,
        slug: 'ai_subtickets',
        description: 'Granular AI implementation tasks'
      }
    ],
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'develop_fe_subtickets',
    name: 'Develop Frontend Sub-tickets',
    description: 'Implement frontend functionality from sub-tickets',
    role: 'fe', // Frontend Developer
    workflow_slug: 'frontend_development',
    inputs: [
      {
        isCollection: true,
        slug: 'fe_subtickets',
        description: 'Frontend sub-tickets ready for implementation'
      }
    ],
    outputs: [], // No document outputs - produces code
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'develop_be_subtickets',
    name: 'Develop Backend Sub-tickets',
    description: 'Implement backend functionality from sub-tickets',
    role: 'be', // Backend Developer
    workflow_slug: 'backend_development',
    inputs: [
      {
        isCollection: true,
        slug: 'be_subtickets',
        description: 'Backend sub-tickets ready for implementation'
      }
    ],
    outputs: [], // No document outputs - produces code
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'develop_ai_subtickets',
    name: 'Develop AI Sub-tickets',
    description: 'Implement AI/ML functionality from sub-tickets', 
    role: 'ai', // AI Developer
    workflow_slug: 'backend_development', // Reuse backend workflow for now
    inputs: [
      {
        isCollection: true,
        slug: 'ai_subtickets',
        description: 'AI sub-tickets ready for implementation'
      }
    ],
    outputs: [], // No document outputs - produces code
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'review_fe_subtickets',
    name: 'Review Frontend Sub-tickets',
    description: 'Frontend leads review frontend code changes for technical quality and standards',
    role: 'fe_lead', // Frontend Lead (reviewer role)
    workflow_slug: 'code_review',
    inputs: [
      {
        isCollection: false,
        slug: 'pull_request',
        description: 'Frontend pull requests that need technical review'
      }
    ],
    outputs: [], // No document outputs - changes PR status
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'review_be_subtickets',
    name: 'Review Backend Sub-tickets',
    description: 'Backend leads review backend code changes for technical quality and standards',
    role: 'be_lead', // Backend Lead (reviewer role)
    workflow_slug: 'code_review',
    inputs: [
      {
        isCollection: false,
        slug: 'pull_request',
        description: 'Backend pull requests that need technical review'
      }
    ],
    outputs: [], // No document outputs - changes PR status
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'review_ai_subtickets',
    name: 'Review AI Sub-tickets',
    description: 'AI leads review AI code changes for technical quality and standards',
    role: 'ai_lead', // AI Lead (reviewer role)
    workflow_slug: 'code_review',
    inputs: [
      {
        isCollection: false,
        slug: 'pull_request',
        description: 'AI pull requests that need technical review'
      }
    ],
    outputs: [], // No document outputs - changes PR status
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  },

  {
    slug: 'qa_review_product_tickets',
    name: 'QA Review Product Tickets',
    description: 'QA squad reviews completed product tickets when all implementation is done',
    role: 'qa', // QA Engineer
    workflow_slug: 'qa_testing',
    inputs: [
      {
        isCollection: true,
        slug: 'enhanced_product_tickets',
        description: 'Enhanced product tickets whose FE/BE/AI tickets are all completed'
      }
    ],
    outputs: [], // No document outputs - changes ticket status to done/rejected-qa
    automated: true, // Completes automatically when outputs produced
    completed: false,
    paused: false,
  }
];

// Dependencies emerge naturally from job input/output document chains
// No explicit sequences needed