-- VCorpState Database Schema

-- Drop tables if they exist (for clean reinstall)
DROP TABLE IF EXISTS job_document_snapshots CASCADE;
DROP TABLE IF EXISTS documents CASCADE;
DROP TABLE IF EXISTS document_collections CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS workflows CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS squads CASCADE;
DROP TABLE IF EXISTS projects CASCADE;

-- Projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    path VARCHAR(500) NOT NULL,
    github_origin VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Squads table (linked to projects)
CREATE TABLE squads (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    slug VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    color VARCHAR(7) NOT NULL, -- hex color codes like #3b82f6
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, slug)
);

-- Roles table (linked to projects and squads)
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    short_name VARCHAR(50) NOT NULL,
    long_name VARCHAR(255) NOT NULL,
    squad_slug VARCHAR(50) NOT NULL,
    description_for_agent TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, short_name),
    FOREIGN KEY (project_id, squad_slug) REFERENCES squads(project_id, slug)
);

-- Workflows table (linked to projects)
CREATE TABLE workflows (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    slug VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    initial_state VARCHAR(100) NOT NULL,
    states JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, slug)
);

-- Jobs table (linked to projects and workflows)
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    slug VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    role VARCHAR(50) NOT NULL,
    workflow_slug VARCHAR(100) NOT NULL,
    inputs JSONB NOT NULL DEFAULT '[]',
    outputs JSONB NOT NULL DEFAULT '[]',
    automated BOOLEAN NOT NULL DEFAULT true, -- If true, job completes automatically when outputs are produced
    completed BOOLEAN NOT NULL DEFAULT false,
    completed_at TIMESTAMP, -- When the job was completed
    last_processed_at TIMESTAMP, -- When the job last processed its input documents
    paused BOOLEAN NOT NULL DEFAULT false, -- If true, job execution is paused
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, slug),
    FOREIGN KEY (project_id, workflow_slug) REFERENCES workflows(project_id, slug)
);

-- Document Collections table (linked to projects)
CREATE TABLE document_collections (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    slug VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    document_type VARCHAR(100) NOT NULL, -- e.g., 'feature', 'product_ticket', 'enhanced_product_ticket'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, slug)
);

-- Documents table (linked to projects and optionally to collections)
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    document_collection_id INTEGER REFERENCES document_collections(id) ON DELETE SET NULL,
    slug VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    file_path VARCHAR(500) NOT NULL, -- Path to the mirrored file in the filesystem (e.g., '.vcorp/releases/mvp-release.md')
    document_type VARCHAR(100) NOT NULL, -- e.g., 'release', 'feature', 'product_ticket'
    parent_document_id INTEGER REFERENCES documents(id) ON DELETE SET NULL,
    blocked_by JSONB NOT NULL DEFAULT '[]', -- Array of document slugs that block this document
    status VARCHAR(50) NOT NULL DEFAULT 'ready', -- 'blocked', 'ready', 'in_progress', 'done'
    assigned_to_role VARCHAR(50), -- Optional role assignment (e.g., "fe", "be", "ai")
    picked_by_agent_id VARCHAR(100), -- ID of agent currently working on this document
    metadata JSONB NOT NULL DEFAULT '{}', -- Type-specific information
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- When document content was last modified
    UNIQUE(project_id, slug)
);

-- Job Document Snapshots table (tracks document processing history)
CREATE TABLE job_document_snapshots (
    id SERIAL PRIMARY KEY,
    job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
    document_id INTEGER NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    document_slug VARCHAR(100) NOT NULL, -- For easy lookup without joins
    
    -- Snapshot of document at processing time
    content_snapshot TEXT NOT NULL, -- Document content when processed
    document_last_updated_at TIMESTAMP NOT NULL, -- Document's last_updated_at when processed
    
    -- Processing metadata
    processed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processing_agent_id VARCHAR(100), -- Which agent processed this document
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(job_id, document_id) -- One snapshot per job-document pair
);

-- Indexes for performance
CREATE INDEX idx_squads_project_id ON squads(project_id);
CREATE INDEX idx_roles_project_id ON roles(project_id);
CREATE INDEX idx_roles_squad ON roles(project_id, squad_slug);
CREATE INDEX idx_workflows_project_id ON workflows(project_id);
CREATE INDEX idx_jobs_project_id ON jobs(project_id);
CREATE INDEX idx_jobs_workflow ON jobs(project_id, workflow_slug);
CREATE INDEX idx_jobs_completed ON jobs(completed);
CREATE INDEX idx_jobs_paused ON jobs(paused);
CREATE INDEX idx_jobs_automated ON jobs(automated);
CREATE INDEX idx_jobs_last_processed_at ON jobs(last_processed_at);
CREATE INDEX idx_job_document_snapshots_job_id ON job_document_snapshots(job_id);
CREATE INDEX idx_job_document_snapshots_document_id ON job_document_snapshots(document_id);
CREATE INDEX idx_job_document_snapshots_processed_at ON job_document_snapshots(processed_at);
CREATE INDEX idx_job_document_snapshots_slug ON job_document_snapshots(document_slug);
CREATE INDEX idx_document_collections_project_id ON document_collections(project_id);
CREATE INDEX idx_documents_project_id ON documents(project_id);
CREATE INDEX idx_documents_collection_id ON documents(document_collection_id);
CREATE INDEX idx_documents_parent_id ON documents(parent_document_id);
CREATE INDEX idx_documents_status ON documents(status);
CREATE INDEX idx_documents_type ON documents(document_type);
CREATE INDEX idx_documents_assigned_role ON documents(assigned_to_role);
CREATE INDEX idx_documents_file_path ON documents(file_path);
CREATE INDEX idx_documents_last_updated_at ON documents(last_updated_at);
CREATE INDEX idx_projects_name ON projects(name);

-- Update triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_squads_updated_at BEFORE UPDATE ON squads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON roles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workflows_updated_at BEFORE UPDATE ON workflows
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_document_collections_updated_at BEFORE UPDATE ON document_collections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_job_document_snapshots_updated_at BEFORE UPDATE ON job_document_snapshots
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();