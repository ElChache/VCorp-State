// VCorpState Squad Templates
// These squads organize roles into functional teams for the pipeline

import { Squad } from '../types/index.js';

export const SQUAD_TEMPLATES: Squad[] = [
  {
    slug: 'pd',
    name: 'Product Designer Squad',
    description: 'Responsible for feature design, product requirements, and user experience',
    color: '#3b82f6' // blue
  },
  {
    slug: 'arch',
    name: 'Architecture Squad', 
    description: 'Technical coordination, integration specifications, and system architecture',
    color: '#f59e0b' // amber
  },
  {
    slug: 'fe',
    name: 'Frontend Squad',
    description: 'Frontend development, UI implementation, and user interface code',
    color: '#10b981' // emerald
  },
  {
    slug: 'be',
    name: 'Backend Squad',
    description: 'Backend development, API implementation, and server-side logic',
    color: '#8b5cf6' // violet
  },
  {
    slug: 'ai',
    name: 'AI Squad',
    description: 'AI/ML development, model implementation, and intelligent features',
    color: '#ef4444' // red
  },
  {
    slug: 'qa',
    name: 'QA Squad',
    description: 'Quality assurance, testing, and validation of completed work',
    color: '#06b6d4' // cyan
  }
];