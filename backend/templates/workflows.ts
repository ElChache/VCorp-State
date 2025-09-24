// VCorpState Workflow Templates
// These workflow state machines can be applied to different jobs

import { Workflow } from '../types/index.js';

export const WORKFLOW_TEMPLATES: Record<string, Workflow> = {
  backend_development: {
    slug: 'backend_development',
    name: 'Backend Development Workflow',
    description: 'Complete backend development cycle from picking tickets to implementing features',
    initial_state: 'picking_ticket',
    states: {
      picking_ticket: {
        id: 'picking_ticket',
        name: 'Picking Ticket',
        instruction: 'Find and pick the next available backend development ticket. Run "vcorp pick-ticket" to automatically assign yourself the highest priority ticket.',
        auto_command: 'vcorp pick-ticket',
        allowed_commands: ['vcorp pick-ticket'],
        allowed_paths: ['.vcorp/tickets/'],
        timeout: 60000, // 1 minute
        transitions: {
          success: 'coding',
          timeout: 'escalate'
        }
      },
      coding: {
        id: 'coding',
        name: 'Coding',
        instruction: 'Implement the feature described in your assigned ticket. Read the ticket requirements, implement the backend functionality, write unit tests, and run "vcorp commit" when complete.',
        auto_command: null,
        allowed_commands: ['vcorp commit'],
        allowed_paths: ['src/', '.vcorp/tickets/'],
        timeout: 3600000, // 1 hour
        transitions: {
          success: 'pushing',
          timeout: 'escalate'
        }
      },
      pushing: {
        id: 'pushing',
        name: 'Pushing Changes',
        instruction: 'Your changes are being automatically pushed to GitHub and a PR is being created.',
        auto_command: 'git push origin HEAD',
        allowed_commands: [],
        allowed_paths: [],
        timeout: 30000, // 30 seconds
        transitions: {
          success: 'waiting_review',
          failure: 'pushing_failed'
        }
      },
      pushing_failed: {
        id: 'pushing_failed',
        name: 'Push Failed',
        instruction: 'The push failed. Check git status and resolve any issues, then run "vcorp commit" to try again.',
        auto_command: null,
        allowed_commands: ['vcorp commit'],
        allowed_paths: ['src/'],
        timeout: 900000, // 15 minutes
        transitions: {
          success: 'pushing',
          timeout: 'escalate'
        }
      },
      waiting_review: {
        id: 'waiting_review',
        name: 'Waiting for Review',
        instruction: 'Your code is waiting for review. Please wait while a reviewer evaluates your implementation.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: 300000, // 5 minutes
        transitions: {
          approved: 'picking_ticket',
          rejected: 'fixing_issues',
          timeout: 'escalate'
        }
      },
      fixing_issues: {
        id: 'fixing_issues',
        name: 'Fixing Review Issues',
        instruction: 'Your code was rejected in review. Read the review comments and address the feedback, then run "vcorp commit" when fixes are complete.',
        auto_command: null,
        allowed_commands: ['vcorp commit'],
        allowed_paths: ['src/', '.vcorp/tickets/'],
        timeout: 1800000, // 30 minutes
        transitions: {
          success: 'pushing',
          timeout: 'escalate'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_ticket'
        }
      }
    }
  },

  frontend_development: {
    slug: 'frontend_development',
    name: 'Frontend Development Workflow',
    description: 'Complete frontend development cycle from picking tickets to implementing UI features',
    initial_state: 'picking_ticket',
    states: {
      picking_ticket: {
        id: 'picking_ticket',
        name: 'Picking Ticket',
        instruction: 'Find and pick the next available frontend development ticket. Run "vcorp pick-ticket" to automatically assign yourself the highest priority ticket.',
        auto_command: 'vcorp pick-ticket',
        allowed_commands: ['vcorp pick-ticket'],
        allowed_paths: ['.vcorp/tickets/'],
        timeout: 60000,
        transitions: {
          success: 'coding',
          timeout: 'escalate'
        }
      },
      coding: {
        id: 'coding',
        name: 'Coding',
        instruction: 'Implement the UI feature described in your assigned ticket. Read the requirements, implement the frontend functionality, write component tests, and run "vcorp commit" when complete.',
        auto_command: null,
        allowed_commands: ['vcorp commit'],
        allowed_paths: ['src/', '.vcorp/tickets/'],
        timeout: 3600000,
        transitions: {
          success: 'pushing',
          timeout: 'escalate'
        }
      },
      pushing: {
        id: 'pushing',
        name: 'Pushing Changes',
        instruction: 'Your changes are being automatically pushed to GitHub and a PR is being created.',
        auto_command: 'git push origin HEAD',
        allowed_commands: [],
        allowed_paths: [],
        timeout: 30000,
        transitions: {
          success: 'waiting_review',
          failure: 'pushing_failed'
        }
      },
      pushing_failed: {
        id: 'pushing_failed',
        name: 'Push Failed',
        instruction: 'The push failed. Check git status and resolve any issues, then run "vcorp commit" to try again.',
        auto_command: null,
        allowed_commands: ['vcorp commit'],
        allowed_paths: ['src/'],
        timeout: 900000,
        transitions: {
          success: 'pushing',
          timeout: 'escalate'
        }
      },
      waiting_review: {
        id: 'waiting_review',
        name: 'Waiting for Review',
        instruction: 'Your code is waiting for review. Please wait while a reviewer evaluates your implementation.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: 300000,
        transitions: {
          approved: 'picking_ticket',
          rejected: 'fixing_issues',
          timeout: 'escalate'
        }
      },
      fixing_issues: {
        id: 'fixing_issues',
        name: 'Fixing Review Issues',
        instruction: 'Your code was rejected in review. Read the review comments and address the feedback, then run "vcorp commit" when fixes are complete.',
        auto_command: null,
        allowed_commands: ['vcorp commit'],
        allowed_paths: ['src/', '.vcorp/tickets/'],
        timeout: 1800000,
        transitions: {
          success: 'pushing',
          timeout: 'escalate'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_ticket'
        }
      }
    }
  },

  document_creation: {
    slug: 'document_creation',
    name: 'Document Creation Workflow',
    description: 'Transform input documents into multiple output documents with dependencies',
    initial_state: 'picking_document',
    states: {
      picking_document: {
        id: 'picking_document',
        name: 'Picking Document',
        instruction: 'Find the next document that needs to be broken down into smaller documents. Run "vcorp pick-document" to automatically assign yourself the highest priority document.',
        auto_command: 'vcorp pick-document',
        allowed_commands: ['vcorp pick-document'],
        allowed_paths: ['.vcorp/'],
        timeout: 60000,
        transitions: {
          success: 'creating_documents',
          no_work: 'waiting_for_work',
          timeout: 'escalate'
        }
      },
      creating_documents: {
        id: 'creating_documents',
        name: 'Creating Documents',
        instruction: 'Break down the assigned document into multiple smaller documents. Use "vcorp create-document" for each new document, edit the files in outputs/, set dependencies between documents, then run "vcorp documents-ready" when complete.',
        auto_command: null,
        allowed_commands: ['vcorp create-document', 'vcorp documents-ready'],
        allowed_paths: ['outputs/', '.vcorp/'],
        timeout: 2400000, // 40 minutes
        transitions: {
          success: 'validation',
          timeout: 'escalate'
        }
      },
      validation: {
        id: 'validation',
        name: 'Validation',
        instruction: 'The system is validating your documents for format correctness and dependency consistency.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: 30000,
        transitions: {
          success: 'picking_document',
          failure: 'fixing_documents'
        }
      },
      fixing_documents: {
        id: 'fixing_documents',
        name: 'Fixing Documents',
        instruction: 'Your documents have validation errors. Review the error messages, fix the issues in outputs/, then run "vcorp documents-ready" again.',
        auto_command: null,
        allowed_commands: ['vcorp documents-ready'],
        allowed_paths: ['outputs/', '.vcorp/'],
        timeout: 1800000, // 30 minutes
        transitions: {
          success: 'validation',
          timeout: 'escalate'
        }
      },
      waiting_for_work: {
        id: 'waiting_for_work',
        name: 'Waiting for Work',
        instruction: 'No documents are currently available for processing. Please wait for new work to become available.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          work_available: 'picking_document'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_document'
        }
      }
    }
  },

  code_review: {
    slug: 'code_review',
    name: 'Code Review Workflow',
    description: 'Review code changes and determine if they need QA testing',
    initial_state: 'picking_review',
    states: {
      picking_review: {
        id: 'picking_review',
        name: 'Picking Review',
        instruction: 'Find code that needs review. Run "vcorp pick-review" to automatically assign yourself the next PR that needs review.',
        auto_command: 'vcorp pick-review',
        allowed_commands: ['vcorp pick-review'],
        allowed_paths: ['.vcorp/tickets/', 'src/'],
        timeout: 60000,
        transitions: {
          success: 'reviewing',
          no_work: 'waiting_for_reviews',
          timeout: 'escalate'
        }
      },
      reviewing: {
        id: 'reviewing',
        name: 'Reviewing Code',
        instruction: 'Review the code changes to ensure they fulfill the ticket requirements. Check implementation quality, test coverage, and adherence to standards. Run "vcorp review-approve" to approve or "vcorp review-reject" with a reason to reject.',
        auto_command: null,
        allowed_commands: ['vcorp review-approve', 'vcorp review-reject'],
        allowed_paths: ['src/', '.vcorp/tickets/'],
        timeout: 1800000, // 30 minutes
        transitions: {
          approved: 'determining_qa',
          rejected: 'picking_review',
          timeout: 'escalate'
        }
      },
      determining_qa: {
        id: 'determining_qa',
        name: 'Determining QA Need',
        instruction: 'Determine if this change requires QA testing based on its complexity and risk. Run "vcorp needs-qa yes" if QA is needed or "vcorp needs-qa no" if not.',
        auto_command: null,
        allowed_commands: ['vcorp needs-qa'],
        allowed_paths: ['.vcorp/tickets/'],
        timeout: 300000, // 5 minutes
        transitions: {
          success: 'picking_review',
          timeout: 'escalate'
        }
      },
      waiting_for_reviews: {
        id: 'waiting_for_reviews',
        name: 'Waiting for Reviews',
        instruction: 'No code is currently available for review. Please wait for developers to submit work for review.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          work_available: 'picking_review'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_review'
        }
      }
    }
  },

  ticket_creation: {
    slug: 'ticket_creation',
    name: 'Ticket Creation Workflow',
    description: 'Break down documents into actionable tickets with clear requirements and acceptance criteria',
    initial_state: 'picking_document',
    states: {
      picking_document: {
        id: 'picking_document',
        name: 'Picking Document',
        instruction: 'Find the next document that needs to be broken down into tickets. Run "vcorp pick-document" to automatically assign yourself the highest priority document.',
        auto_command: 'vcorp pick-document',
        allowed_commands: ['vcorp pick-document'],
        allowed_paths: ['.vcorp/'],
        timeout: 60000,
        transitions: {
          success: 'analyzing_requirements',
          no_work: 'waiting_for_work',
          timeout: 'escalate'
        }
      },
      analyzing_requirements: {
        id: 'analyzing_requirements',
        name: 'Analyzing Requirements',
        instruction: 'Study the document thoroughly to understand the requirements and technical constraints. Identify what needs to be implemented.',
        auto_command: null,
        allowed_commands: ['vcorp ready-to-create'],
        allowed_paths: ['.vcorp/', 'outputs/'],
        timeout: null,
        transitions: {
          success: 'creating_tickets',
          timeout: 'escalate'
        }
      },
      creating_tickets: {
        id: 'creating_tickets',
        name: 'Creating Tickets',
        instruction: 'Break down the requirements into specific, actionable tickets. Use "vcorp tickets" to create each ticket with role assignment, acceptance criteria, and priorities. Run "vcorp documents-ready" when all tickets are complete.',
        auto_command: null,
        allowed_commands: ['vcorp tickets', 'vcorp documents-ready'],
        allowed_paths: ['outputs/', '.vcorp/'],
        timeout: null,
        transitions: {
          success: 'validation',
          timeout: 'escalate'
        }
      },
      validation: {
        id: 'validation',
        name: 'Validation',
        instruction: 'The system is validating your tickets for completeness, clarity, and dependency consistency.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: 30000,
        transitions: {
          success: 'picking_document',
          failure: 'refining_tickets'
        }
      },
      refining_tickets: {
        id: 'refining_tickets',
        name: 'Refining Tickets',
        instruction: 'Your tickets need refinement. Review the validation feedback, clarify requirements, add missing acceptance criteria, fix dependencies, then run "vcorp documents-ready" again.',
        auto_command: null,
        allowed_commands: ['vcorp documents-ready'],
        allowed_paths: ['outputs/', '.vcorp/'],
        timeout: null,
        transitions: {
          success: 'validation',
          timeout: 'escalate'
        }
      },
      waiting_for_work: {
        id: 'waiting_for_work',
        name: 'Waiting for Work',
        instruction: 'No documents are currently available for ticket creation. Please wait for new work to become available.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          work_available: 'picking_document'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_document'
        }
      }
    }
  },

  product_design: {
    slug: 'product_design',
    name: 'Product Design Workflow',
    description: 'Strategic product design process from research to feature definition',
    initial_state: 'picking_release',
    states: {
      picking_release: {
        id: 'picking_release',
        name: 'Picking Release',
        instruction: 'Find the next release document that needs product design work. Run "vcorp pick-document" to automatically assign yourself the highest priority release.',
        auto_command: 'vcorp pick-document',
        allowed_commands: ['vcorp pick-document'],
        allowed_paths: ['.vcorp/'],
        timeout: 60000,
        transitions: {
          success: 'researching_requirements',
          no_work: 'waiting_for_releases',
          timeout: 'escalate'
        }
      },
      researching_requirements: {
        id: 'researching_requirements',
        name: 'Researching Requirements',
        instruction: 'Analyze the release vision and understand the requirements. Research user needs and business constraints as needed.',
        auto_command: null,
        allowed_commands: ['vcorp ready-to-create'],
        allowed_paths: ['.vcorp/', 'outputs/'],
        timeout: null,
        transitions: {
          success: 'creating_features',
          timeout: 'escalate'
        }
      },
      creating_features: {
        id: 'creating_features',
        name: 'Creating Features',
        instruction: 'Transform the release vision into specific product features. Use "vcorp create-document" for each feature, define user stories and set priorities. Run "vcorp documents-ready" when complete.',
        auto_command: null,
        allowed_commands: ['vcorp create-document', 'vcorp documents-ready'],
        allowed_paths: ['outputs/', '.vcorp/'],
        timeout: null,
        transitions: {
          success: 'stakeholder_review',
          timeout: 'escalate'
        }
      },
      stakeholder_review: {
        id: 'stakeholder_review',
        name: 'Stakeholder Review',
        instruction: 'Your features are under stakeholder review. Wait for feedback on feature prioritization, scope adjustments, and strategic alignment.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          approved: 'picking_release',
          needs_changes: 'iterating_features',
          timeout: 'escalate'
        }
      },
      iterating_features: {
        id: 'iterating_features',
        name: 'Iterating Features',
        instruction: 'Refine your features based on stakeholder feedback. Adjust scope, priorities, user stories, or feature definitions, then run "vcorp documents-ready" when updates are complete.',
        auto_command: null,
        allowed_commands: ['vcorp documents-ready'],
        allowed_paths: ['outputs/', '.vcorp/'],
        timeout: null,
        transitions: {
          success: 'stakeholder_review',
          timeout: 'escalate'
        }
      },
      waiting_for_releases: {
        id: 'waiting_for_releases',
        name: 'Waiting for Releases',
        instruction: 'No releases are currently available for product design work. Please wait for new releases to become available.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          work_available: 'picking_release'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_release'
        }
      }
    }
  },

  qa_testing: {
    slug: 'qa_testing',
    name: 'QA Testing Workflow',
    description: 'Test completed features and validate they work correctly',
    initial_state: 'picking_qa',
    states: {
      picking_qa: {
        id: 'picking_qa',
        name: 'Picking QA Task',
        instruction: 'Find features that need QA testing. Run "vcorp pick-qa" to automatically assign yourself the next item that needs testing.',
        auto_command: 'vcorp pick-qa',
        allowed_commands: ['vcorp pick-qa'],
        allowed_paths: ['.vcorp/tickets/'],
        timeout: 60000,
        transitions: {
          success: 'testing',
          no_work: 'waiting_for_qa',
          timeout: 'escalate'
        }
      },
      testing: {
        id: 'testing',
        name: 'Testing Feature',
        instruction: 'Test the implemented feature according to the requirements. Verify functionality, edge cases, and user experience. Run "vcorp qa-pass" if tests pass or "vcorp qa-fail" with details if issues are found.',
        auto_command: null,
        allowed_commands: ['vcorp qa-pass', 'vcorp qa-fail'],
        allowed_paths: ['src/', '.vcorp/tickets/'],
        timeout: 2400000, // 40 minutes
        transitions: {
          passed: 'picking_qa',
          failed: 'picking_qa',
          timeout: 'escalate'
        }
      },
      waiting_for_qa: {
        id: 'waiting_for_qa',
        name: 'Waiting for QA Work',
        instruction: 'No items are currently available for QA testing. Please wait for reviewed code to become available.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          work_available: 'picking_qa'
        }
      },
      escalate: {
        id: 'escalate',
        name: 'Escalated to Human',
        instruction: 'This task has been escalated to human attention due to timeout or repeated failures.',
        auto_command: null,
        allowed_commands: [],
        allowed_paths: [],
        timeout: null,
        transitions: {
          manual_reset: 'picking_qa'
        }
      }
    }
  }
};