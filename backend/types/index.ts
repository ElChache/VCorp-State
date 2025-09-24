// VCorpState TypeScript Definitions

export interface Squad {
  slug: string;
  name: string;
  description: string;
  color: string;
}

export interface DatabaseSquad extends Squad {
  id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
}

export interface Role {
  short_name: string;
  long_name: string;
  description_for_agent: string;
  squad_slug: string;
}

export interface DatabaseRole extends Role {
  id: number;
  project_id: number;
  squad_slug: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  path: string;
  github_origin?: string;
  created_at: string;
  updated_at: string;
}

export interface WorkflowState {
  id: string;
  name: string;
  instruction: string;
  auto_command: string | null;
  allowed_commands: string[];
  allowed_paths: string[];
  timeout: number | null;
  transitions: Record<string, string>;
}

export interface Workflow {
  slug: string;
  name: string;
  description: string;
  initial_state: string;
  states: Record<string, WorkflowState>;
}

export interface JobInput {
  type: string;
  description: string;
  required: boolean;
  min_count: number;
  max_count: number | null;
  filter_by_role?: boolean;
  status?: string;
}

export interface JobOutput {
  type: string;
  description: string;
  required: boolean;
  min_count: number;
  max_count: number | null;
}

export interface Job {
  slug: string;
  name: string;
  description: string;
  role: string | string[];
  workflow_slug: string;
  inputs: JobInput[];
  outputs: JobOutput[];
  requires_approval: boolean;
  auto_start: boolean;
  priority: number;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  squads: Squad[];
  roles: Role[];
  workflows: Record<string, Workflow>;
  jobs: string[]; // Array of job slugs to include
  features?: string[];
}

export interface ProjectTemplateMetadata {
  id: string;
  name: string;
  description: string;
  icon: string;
  features?: string[];
  squadCount: number;
  roleCount: number;
  workflowCount: number;
  jobCount: number;
}

export interface CreateProjectRequest {
  name: string;
  description?: string;
  path: string;
  githubOrigin?: string;
  templateId?: string;
}

export interface CreateProjectResponse {
  project: Project;
  squads: DatabaseSquad[];
  roles: DatabaseRole[];
  template: {
    id: string;
    name: string;
    description: string;
  };
  workflows: any[];
  jobs: any[];
  message: string;
}

export interface GetProjectResponse {
  project: Project;
  squads: DatabaseSquad[];
  roles: DatabaseRole[];
  workflows: any[];
  jobs: any[];
}

export interface ApiError {
  error: string;
}

export interface HealthResponse {
  status: string;
  service: string;
}

export interface HelloResponse {
  message: string;
  timestamp?: string;
  status?: string;
  error?: string;
}

export interface TemplatesResponse {
  squads: Squad[];
  roles: Role[];
  workflows: Record<string, Workflow>;
  jobs: Job[];
  projects: Record<string, ProjectTemplate>;
}

export interface JobTemplatesResponse {
  jobs: Job[];
}