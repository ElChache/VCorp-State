# VCorpState Database Documentation

## 🗄️ Database Schema Overview

VCorpState uses PostgreSQL with Prisma ORM for type-safe database operations and real-time triggers for instant graph updates.

## Core Data Model

### Hierarchical Structure
```
Projects
├── Squads (teams with colors)
│   └── Roles (fe, be, ai, etc.)
├── Workflows (state machines)
│   └── Jobs (transformation tasks)
└── Document Collections
    └── Documents (with status lifecycle)
```

## Entity Relationships

### Projects → Squads → Roles
- **Projects** are the top-level containers
- **Squads** represent teams within projects (color-coded for visualization)
- **Roles** define agent capabilities within squads (frontend, backend, AI, etc.)

### Workflows → Jobs  
- **Workflows** are state machines defining document processing flows
- **Jobs** are individual transformation tasks with defined inputs/outputs
- Support both automated and manual execution modes

### Document Collections → Documents
- **Collections** group related documents by type (features, tickets, releases)
- **Documents** represent individual work items with content and metadata
- **Status Lifecycle**: `blocked` → `ready` → `in_progress` → `done`
- Support hierarchical relationships (parent/child documents)

### Job Document Snapshots
- Track processing history with content snapshots at processing time
- Enable audit trails and rollback capabilities
- Link jobs to specific document versions

## Prisma ORM Integration

### Schema Definition
The Prisma schema (`backend/prisma/schema.prisma`) defines the complete data model with:
- Full TypeScript type generation
- Relationship mappings
- Database constraints
- Field validations

### Type-Safe Operations
```typescript
// Create project with all related entities in transaction
const result = await prisma.$transaction(async (tx) => {
  const project = await tx.project.create({
    data: { name, description, path }
  });
  
  await tx.squad.createMany({
    data: squads.map(squad => ({ project_id: project.id, ...squad }))
  });
  
  return project;
});
```

### Complex Analytics (Raw SQL)
For performance-critical queries, raw SQL is used:
```typescript
const progress = await prisma.$queryRaw`
  SELECT 
    dc.id,
    dc.slug,
    dc.name,
    COUNT(d.id)::int as total,
    COUNT(CASE WHEN d.status = 'done' THEN 1 END)::int as completed,
    COUNT(CASE WHEN d.status = 'in_progress' THEN 1 END)::int as in_progress,
    COUNT(CASE WHEN d.status = 'blocked' THEN 1 END)::int as blocked
  FROM document_collections dc
  LEFT JOIN documents d ON dc.id = d.document_collection_id
  WHERE dc.id = ${collectionId}
  GROUP BY dc.id, dc.slug, dc.name
`;
```

## Real-Time System

### PostgreSQL Triggers
Triggers automatically emit NOTIFY events on data changes:

```sql
-- Document status change trigger
CREATE OR REPLACE FUNCTION notify_document_change()
RETURNS TRIGGER AS $$
DECLARE
  payload JSON;
BEGIN
  payload = json_build_object(
    'type', 'document_status_changed',
    'document_id', NEW.id,
    'project_id', NEW.project_id,
    'collection_id', NEW.document_collection_id,
    'slug', NEW.slug,
    'old_status', COALESCE(OLD.status, ''),
    'new_status', NEW.status,
    'assigned_to_role', NEW.assigned_to_role,
    'picked_by_agent_id', NEW.picked_by_agent_id,
    'timestamp', EXTRACT(EPOCH FROM NOW())
  );
  
  PERFORM pg_notify('vcorp_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER document_change_trigger
  AFTER UPDATE OF status, assigned_to_role, picked_by_agent_id ON documents
  FOR EACH ROW
  WHEN (OLD.status IS DISTINCT FROM NEW.status OR 
        OLD.assigned_to_role IS DISTINCT FROM NEW.assigned_to_role OR
        OLD.picked_by_agent_id IS DISTINCT FROM NEW.picked_by_agent_id)
  EXECUTE FUNCTION notify_document_change();
```

### Event Types
1. **document_status_changed** - Document workflow state updates
2. **job_status_changed** - Job completion/pause events
3. **document_created** - New documents added to collections  
4. **collection_progress_updated** - Aggregate progress statistics

### WebSocket Broadcasting
The real-time service listens for PostgreSQL NOTIFY events and broadcasts them via WebSocket to connected clients:

```
Database Update → PostgreSQL Trigger → NOTIFY Event → WebSocket Broadcast → Frontend Update
```

## Data Flow Architecture

### Project Creation Flow
1. Client sends project creation request
2. Prisma transaction creates project + squads + roles + workflows + jobs
3. Project seeding service creates initial document collections
4. Response includes complete project structure
5. Real-time triggers fire for any document creation

### Document Processing Flow  
1. Document status updated via API or agent
2. PostgreSQL trigger fires automatically
3. NOTIFY event broadcast via WebSocket
4. Frontend receives update and re-renders graph
5. Collection progress recalculated and broadcast

### Zero-Polling Benefits
- **Instant Updates**: Changes appear immediately across all connected clients
- **Minimal Bandwidth**: Only actual changes are transmitted
- **Database Efficiency**: No repeated polling queries
- **Scale Friendly**: WebSocket connections handle many clients efficiently

## Development Commands

```bash
# Prisma operations
npm run db:generate    # Generate TypeScript client from schema
npm run db:migrate     # Run database migrations (if using migrations)

# Database setup
bun db:init           # Initialize schema from SQL files
bun db:triggers       # Set up real-time triggers

# Development
bun --watch server.ts # Auto-restart server on changes
```

## Environment Variables

```bash
DATABASE_URL=postgresql://vcorp:vcorp123@localhost:5432/vcorpstate
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=vcorpstate
POSTGRES_USER=vcorp
POSTGRES_PASSWORD=vcorp123
```

## Troubleshooting

### Common Issues

**Prisma Client Out of Sync**
```bash
npm run db:generate
```

**Triggers Not Working**  
```bash
cd backend && bun db:triggers
```

**Connection Refused**
- Ensure PostgreSQL is running via Docker Compose
- Check `DATABASE_URL` environment variable

**Type Errors**
- Regenerate Prisma client after schema changes
- Ensure TypeScript types are up to date