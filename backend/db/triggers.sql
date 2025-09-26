-- Real-time event triggers for VCorpState
-- These triggers emit NOTIFY events when key data changes occur

-- =====================================================
-- UPDATED_AT TRIGGERS
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_squads_updated_at ON squads;
CREATE TRIGGER update_squads_updated_at BEFORE UPDATE ON squads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_roles_updated_at ON roles;
CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON roles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_workflows_updated_at ON workflows;
CREATE TRIGGER update_workflows_updated_at BEFORE UPDATE ON workflows
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_jobs_updated_at ON jobs;
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_document_collections_updated_at ON document_collections;
CREATE TRIGGER update_document_collections_updated_at BEFORE UPDATE ON document_collections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_documents_updated_at ON documents;
CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_job_document_snapshots_updated_at ON job_document_snapshots;
CREATE TRIGGER update_job_document_snapshots_updated_at BEFORE UPDATE ON job_document_snapshots
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- DOCUMENT STATUS CHANGES
-- =====================================================

CREATE OR REPLACE FUNCTION notify_document_change()
RETURNS TRIGGER AS $$
DECLARE
  payload JSON;
BEGIN
  -- Build event payload
  payload = json_build_object(
    'type', 'document_status_changed',
    'document_id', NEW.id,
    'project_id', NEW.project_id,
    'collection_id', NEW.document_collection_id,
    'slug', NEW.slug,
    'old_status', COALESCE(OLD.status, ''),
    'new_status', NEW.status,
    'old_ready', COALESCE(OLD.ready, false),
    'new_ready', NEW.ready,
    'assigned_to_role', NEW.assigned_to_role,
    'picked_by_agent_id', NEW.picked_by_agent_id,
    'timestamp', EXTRACT(EPOCH FROM NOW())
  );
  
  -- Emit event
  PERFORM pg_notify('vcorp_events', payload::text);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for document status changes
DROP TRIGGER IF EXISTS document_change_trigger ON documents;
CREATE TRIGGER document_change_trigger
  AFTER UPDATE OF status, ready, assigned_to_role, picked_by_agent_id ON documents
  FOR EACH ROW
  WHEN (OLD.status IS DISTINCT FROM NEW.status OR 
        OLD.ready IS DISTINCT FROM NEW.ready OR
        OLD.assigned_to_role IS DISTINCT FROM NEW.assigned_to_role OR
        OLD.picked_by_agent_id IS DISTINCT FROM NEW.picked_by_agent_id)
  EXECUTE FUNCTION notify_document_change();

-- =====================================================
-- JOB STATUS CHANGES  
-- =====================================================

CREATE OR REPLACE FUNCTION notify_job_change()
RETURNS TRIGGER AS $$
DECLARE
  payload JSON;
BEGIN
  payload = json_build_object(
    'type', 'job_status_changed',
    'job_id', NEW.id,
    'project_id', NEW.project_id,
    'slug', NEW.slug,
    'old_completed', COALESCE(OLD.completed, false),
    'new_completed', NEW.completed,
    'old_paused', COALESCE(OLD.paused, false),
    'new_paused', NEW.paused,
    'role', NEW.role,
    'completed_at', EXTRACT(EPOCH FROM NEW.completed_at),
    'timestamp', EXTRACT(EPOCH FROM NOW())
  );
  
  PERFORM pg_notify('vcorp_events', payload::text);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for job status changes
DROP TRIGGER IF EXISTS job_change_trigger ON jobs;
CREATE TRIGGER job_change_trigger
  AFTER UPDATE OF completed, paused, completed_at, last_processed_at ON jobs
  FOR EACH ROW
  WHEN (OLD.completed IS DISTINCT FROM NEW.completed OR
        OLD.paused IS DISTINCT FROM NEW.paused OR
        OLD.completed_at IS DISTINCT FROM NEW.completed_at OR
        OLD.last_processed_at IS DISTINCT FROM NEW.last_processed_at)
  EXECUTE FUNCTION notify_job_change();

-- =====================================================
-- NEW DOCUMENT CREATION
-- =====================================================

CREATE OR REPLACE FUNCTION notify_document_created()
RETURNS TRIGGER AS $$
DECLARE
  payload JSON;
BEGIN
  payload = json_build_object(
    'type', 'document_created',
    'document_id', NEW.id,
    'project_id', NEW.project_id,
    'collection_id', NEW.document_collection_id,
    'slug', NEW.slug,
    'name', NEW.name,
    'status', NEW.status,
    'ready', NEW.ready,
    'document_type', NEW.document_type,
    'timestamp', EXTRACT(EPOCH FROM NOW())
  );
  
  PERFORM pg_notify('vcorp_events', payload::text);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for new documents
DROP TRIGGER IF EXISTS document_created_trigger ON documents;
CREATE TRIGGER document_created_trigger
  AFTER INSERT ON documents
  FOR EACH ROW
  EXECUTE FUNCTION notify_document_created();

-- =====================================================
-- COLLECTION PROGRESS CHANGES
-- =====================================================

CREATE OR REPLACE FUNCTION notify_collection_progress()
RETURNS TRIGGER AS $$
DECLARE
  payload JSON;
  collection_stats RECORD;
BEGIN
  -- Calculate collection progress
  SELECT 
    dc.id,
    dc.slug,
    dc.name,
    COUNT(d.id) as total_documents,
    COUNT(CASE WHEN d.status = 'done' THEN 1 END) as completed_documents,
    COUNT(CASE WHEN d.status = 'in_progress' THEN 1 END) as in_progress_documents,
    COUNT(CASE WHEN d.status = 'blocked' THEN 1 END) as blocked_documents,
    COUNT(CASE WHEN d.status = 'ready' THEN 1 END) as ready_documents
  INTO collection_stats
  FROM document_collections dc
  LEFT JOIN documents d ON dc.id = d.document_collection_id
  WHERE dc.id = COALESCE(NEW.document_collection_id, OLD.document_collection_id)
  GROUP BY dc.id, dc.slug, dc.name;
  
  payload = json_build_object(
    'type', 'collection_progress_updated',
    'collection_id', collection_stats.id,
    'project_id', COALESCE(NEW.project_id, OLD.project_id),
    'slug', collection_stats.slug,
    'name', collection_stats.name,
    'total', COALESCE(collection_stats.total_documents, 0),
    'completed', COALESCE(collection_stats.completed_documents, 0),
    'in_progress', COALESCE(collection_stats.in_progress_documents, 0),
    'blocked', COALESCE(collection_stats.blocked_documents, 0),
    'ready', COALESCE(collection_stats.ready_documents, 0),
    'timestamp', EXTRACT(EPOCH FROM NOW())
  );
  
  PERFORM pg_notify('vcorp_events', payload::text);
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Trigger for collection progress (fires on document changes)
DROP TRIGGER IF EXISTS collection_progress_trigger ON documents;
CREATE TRIGGER collection_progress_trigger
  AFTER INSERT OR UPDATE OF status, ready OR DELETE ON documents
  FOR EACH ROW
  EXECUTE FUNCTION notify_collection_progress();

-- =====================================================
-- DOCUMENT COLLECTION CHANGES
-- =====================================================

CREATE OR REPLACE FUNCTION notify_collection_change()
RETURNS TRIGGER AS $$
DECLARE
  payload JSON;
BEGIN
  payload = json_build_object(
    'type', 'collection_changed',
    'collection_id', NEW.id,
    'project_id', NEW.project_id,
    'slug', NEW.slug,
    'name', NEW.name,
    'path', NEW.path,
    'document_type', NEW.document_type,
    'timestamp', EXTRACT(EPOCH FROM NOW())
  );
  
  PERFORM pg_notify('vcorp_events', payload::text);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for document collection changes (especially path updates)
DROP TRIGGER IF EXISTS collection_change_trigger ON document_collections;
CREATE TRIGGER collection_change_trigger
  AFTER UPDATE ON document_collections
  FOR EACH ROW
  WHEN (OLD.path IS DISTINCT FROM NEW.path OR
        OLD.name IS DISTINCT FROM NEW.name OR
        OLD.document_type IS DISTINCT FROM NEW.document_type)
  EXECUTE FUNCTION notify_collection_change();

-- Trigger for new document collection creation
DROP TRIGGER IF EXISTS collection_created_trigger ON document_collections;
CREATE TRIGGER collection_created_trigger
  AFTER INSERT ON document_collections
  FOR EACH ROW
  EXECUTE FUNCTION notify_collection_change();

-- =====================================================
-- AGENT ACTIVITY (Future - when agent system is built)
-- =====================================================

-- Placeholder for agent events
-- CREATE OR REPLACE FUNCTION notify_agent_activity()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   -- Agent state changes, job assignments, etc.
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- =====================================================
-- UTILITY FUNCTIONS
-- =====================================================

-- Function to manually emit test events (useful for development)
CREATE OR REPLACE FUNCTION emit_test_event(event_data JSON)
RETURNS void AS $$
BEGIN
  PERFORM pg_notify('vcorp_events', event_data::text);
END;
$$ LANGUAGE plpgsql;

-- Function to check current listeners (useful for debugging)
CREATE OR REPLACE FUNCTION get_notification_listeners()
RETURNS TABLE(application_name text, backend_start timestamp, notifications_count bigint) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    pg_stat_activity.application_name,
    pg_stat_activity.backend_start,
    0::bigint as notifications_count
  FROM pg_stat_activity 
  WHERE pg_stat_activity.state = 'idle in transaction'
    AND pg_stat_activity.query LIKE '%LISTEN%';
END;
$$ LANGUAGE plpgsql;