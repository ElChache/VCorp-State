// VCorpState Role Templates
// These roles are automatically created when a new project is initialized

import { Role } from '../types/index.js';

export const ROLE_TEMPLATES: Role[] = [
  {
    short_name: 'pd',
    long_name: 'Product Designer',
    squad_slug: 'pd',
    description_for_agent: 'You are a Product Designer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'sa', 
    long_name: 'System Architect',
    squad_slug: 'arch',
    description_for_agent: 'You are a System Architect in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'fe_lead',
    long_name: 'Frontend Lead', 
    squad_slug: 'fe',
    description_for_agent: 'You are a Frontend Lead in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'be_lead',
    long_name: 'Backend Lead', 
    squad_slug: 'be',
    description_for_agent: 'You are a Backend Lead in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'ai_lead',
    long_name: 'AI Lead', 
    squad_slug: 'ai',
    description_for_agent: 'You are an AI Lead in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'fe',
    long_name: 'Frontend Developer',
    squad_slug: 'fe',
    description_for_agent: 'You are a Frontend Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'be', 
    long_name: 'Backend Developer',
    squad_slug: 'be',
    description_for_agent: 'You are a Backend Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'ai',
    long_name: 'AI Developer',
    squad_slug: 'ai',
    description_for_agent: 'You are an AI Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'qa',
    long_name: 'QA Engineer', 
    squad_slug: 'qa',
    description_for_agent: 'You are a QA Engineer in the VCorp corporation and you are working on developing a new product.'
  }
];