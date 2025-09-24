// VCorpState Role Templates
// These roles are automatically created when a new project is initialized

import { Role } from '../types/index.js';

export const ROLE_TEMPLATES: Role[] = [
  {
    short_name: 'pd',
    long_name: 'Product Designer',
    description_for_agent: 'You are a Product Designer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'sa', 
    long_name: 'System Architect',
    description_for_agent: 'You are a System Architect in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'ld',
    long_name: 'Lead Developer', 
    description_for_agent: 'You are a Lead Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'fe',
    long_name: 'Frontend Developer',
    description_for_agent: 'You are a Frontend Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'be', 
    long_name: 'Backend Developer',
    description_for_agent: 'You are a Backend Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'ai',
    long_name: 'AI Developer',
    description_for_agent: 'You are an AI Developer in the VCorp corporation and you are working on developing a new product.'
  },
  {
    short_name: 'qa',
    long_name: 'QA Engineer', 
    description_for_agent: 'You are a QA Engineer in the VCorp corporation and you are working on developing a new product.'
  }
];