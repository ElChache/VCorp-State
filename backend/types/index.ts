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

export interface DocumentCollection {
  slug: string;
  name: string;
  description?: string;
  path?: string;
  document_type: string; // e.g., 'feature', 'product_ticket', 'enhanced_product_ticket'
}

export interface DatabaseDocumentCollection extends DocumentCollection {
  id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
}

export interface Document {
  slug: string;
  name: string;
  content: string;
  file_path: string; // Path to the mirrored file in the filesystem
  document_type: string; // e.g., 'release', 'feature', 'product_ticket'
  parent_document_id?: number;
  blocked_by: string[]; // Array of document slugs that block this document
  status: 'blocked' | 'ready' | 'in_progress' | 'done';
  assigned_to_role?: string; // Optional role assignment (e.g., "fe", "be", "ai")
  picked_by_agent_id?: string; // ID of agent currently working on this document
  ready: boolean; // Whether document is ready for processing
  metadata: Record<string, any>; // Type-specific information
}

export interface DatabaseDocument extends Document {
  id: number;
  project_id: number;
  document_collection_id?: number;
  created_at: string;
  updated_at: string;
  last_updated_at: string; // When document content was last modified
}

export interface JobInput {
  slug: string; // Document slug or collection slug
  description: string;
}

export interface JobOutput {
  slug: string; // Document slug or collection slug
  description: string;
}

export interface Job {
  slug: string;
  name: string;
  description: string;
  role: string | string[];
  workflow_slug: string;
  inputs: JobInput[];
  outputs: JobOutput[];
  auto_start: boolean; // If true, job starts automatically when inputs are ready
  auto_complete: boolean; // If true, job completes automatically when outputs are produced
  in_progress: boolean; // If true, job is currently being processed
  completed: boolean;
  completed_at?: string; // When the job was completed
  last_processed_at?: string; // When the job last processed its input documents
  paused: boolean; // If true, job execution is paused
}

export interface JobDocumentSnapshot {
  job_id: number;
  document_id: number;
  document_slug: string;
  content_snapshot: string; // Document content when processed
  document_last_updated_at: string; // Document's last_updated_at when processed
  processed_at: string;
  processing_agent_id?: string; // Which agent processed this document
}

export interface DatabaseJobDocumentSnapshot extends JobDocumentSnapshot {
  id: number;
  created_at: string;
  updated_at: string;
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

// Graph Visualization Types
export interface GraphPosition {
  x: number;
  y: number;
}

export interface GraphNode {
  id: string;
  type: 'collection' | 'job';
  position: GraphPosition;
}

export interface CollectionNode extends GraphNode {
  type: 'collection';
  data: {
    slug: string;
    name: string;
    status: 'blocked' | 'ready' | 'in_progress' | 'done';
    progress: {
      completed: number;
      total: number;
    };
    documents: DocumentSummary[];
    file_path?: string;
  };
}

export interface JobNode extends GraphNode {
  type: 'job';
  data: {
    slug: string;
    name: string;
    role: string;
    squad: string;
    status: 'waiting' | 'running' | 'completed' | 'paused';
    agent?: AgentInfo;
    auto_start: boolean;
    auto_complete: boolean;
    in_progress: boolean;
    duration?: string;
  };
}

export interface DocumentSummary {
  id: number;
  slug: string;
  name: string;
  status: 'blocked' | 'ready' | 'in_progress' | 'done';
  assigned_to_role?: string;
  picked_by_agent_id?: string;
}

export interface Agent {
  slug: string;
  role: string;
  status: string; // 'idle', 'active'
  first_launched_at?: string;
  last_launched_at?: string;
}

export interface DatabaseAgent extends Agent {
  id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
}

export interface AgentInfo {
  id: string;
  current_state?: string;
  status?: string;
  last_activity?: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: 'dependency' | 'transformation';
  data?: {
    label?: string;
    description?: string;
  };
}

export interface SquadColumn {
  squad_slug: string;
  squad_name: string;
  color: string;
  x_position: number;
  width: number;
}

export interface GraphLayout {
  squads: SquadColumn[];
  width: number;
  height: number;
}

export interface GraphData {
  nodes: Array<CollectionNode | JobNode>;
  edges: GraphEdge[];
  layout: GraphLayout;
}

export interface CollectionDetails {
  collection: DatabaseDocumentCollection;
  documents: DatabaseDocument[];
  progress: {
    completed: number;
    total: number;
    blocked: number;
    in_progress: number;
  };
  file_paths: string[];
  last_updated: string;
}

export interface JobDetails {
  job: Job & { id: number; project_id: number };
  agent?: AgentInfo;
  input_collections: DatabaseDocumentCollection[];
  output_collections: DatabaseDocumentCollection[];
  execution_log: string[];
  duration: string;
  snapshots: JobDocumentSnapshot[];
}