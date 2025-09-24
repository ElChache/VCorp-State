// VCorpState TypeScript Definitions

export interface Role {
  short_name: string;
  long_name: string;
  description_for_agent: string;
}

export interface DatabaseRole extends Role {
  id: number;
  project_id: number;
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
  id: string;
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
  id: string;
  name: string;
  description: string;
  role: string | string[];
  workflow_id: string;
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
  roles: Role[];
  workflows: Record<string, Workflow>;
  jobs: Job[];
  sequences: Record<string, (string | string[])[]>;
  features?: string[];
}

export interface ProjectTemplateMetadata {
  id: string;
  name: string;
  description: string;
  icon: string;
  features?: string[];
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
  roles: DatabaseRole[];
  template: {
    id: string;
    name: string;
    description: string;
  };
  workflows: Record<string, Workflow>;
  jobs: Job[];
  sequences: Record<string, (string | string[])[]>;
  message: string;
}

export interface GetProjectResponse {
  project: Project;
  roles: DatabaseRole[];
  template: {
    id: string;
    name: string;
    description: string;
  };
  workflows: Record<string, Workflow>;
  jobs: Job[];
  sequences: Record<string, (string | string[])[]>;
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
  roles: Role[];
  workflows: Record<string, Workflow>;
  jobs: Job[];
  sequences: Record<string, (string | string[])[]>;
  projects: Record<string, ProjectTemplate>;
}

export interface JobTemplatesResponse {
  jobs: Job[];
  sequences: Record<string, (string | string[])[]>;
}