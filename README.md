# VCorpState

VCorp State Management Platform - A document transformation pipeline with real-time graph visualization.

## 🚀 Quick Start

Run the entire stack with one command:

```bash
pnpm start
```

This will:
- Start PostgreSQL in Docker (port 5432)
- Start the backend API server (port 3001) 
- Start WebSocket server for real-time events (port 3003)
- Start the ClojureScript frontend with hot reload (port 8000)

Open http://localhost:8000 to access the application.

## Prerequisites

- [pnpm](https://pnpm.io/) - Package manager
- [Docker](https://docker.com/) - For PostgreSQL database
- [Bun](https://bun.sh/) - JavaScript runtime for backend
- [Java 11+](https://openjdk.org/) - Required by shadow-cljs

## Configuration

All ports and settings are configurable via environment variables in `.env`:

```bash
FRONTEND_PORT=3000
BACKEND_PORT=3001
POSTGRES_PORT=5432
POSTGRES_DB=vcorpstate
POSTGRES_USER=vcorp
POSTGRES_PASSWORD=vcorp123
DATABASE_URL=postgresql://vcorp:vcorp123@localhost:5432/vcorpstate
SHADOW_CLJS_PORT=9630
NODE_ENV=development
```

## Commands

- `pnpm start` - Start all services (development mode)
- `pnpm build` - Build for production
- `pnpm prod` - Run production build
- `pnpm stop` - Stop all services

## 🗄️ Database Setup

### Initial Setup
The database schema is automatically applied when the backend starts. However, for **real-time features**, you need to set up PostgreSQL triggers:

```bash
# After first run, set up real-time triggers
cd backend
bun db:triggers
```

### What this does:
- Creates PostgreSQL triggers that fire on document/job status changes
- Sets up NOTIFY events for instant real-time updates
- Enables WebSocket broadcasting of database changes

### Manual Setup (if needed)
```bash
# Initialize database schema
cd backend  
bun db:init

# Set up real-time triggers
bun db:triggers

# Prisma commands
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run database migrations (if using Prisma migrate)
```

## 🏗️ Architecture

- **Frontend**: Re-frame (ClojureScript) with Reagent, shadow-cljs build, Tailwind CSS
- **Backend**: Node.js with Express (run with Bun), TypeScript with Prisma ORM
- **Database**: PostgreSQL with Prisma schema management and real-time triggers
- **Real-time**: PostgreSQL NOTIFY + WebSocket broadcasting (zero polling)
- **Container**: Multi-service Docker Compose with health checks

### Real-Time System
```
Database Changes → PostgreSQL Triggers → NOTIFY Events → WebSocket → Frontend Updates
```

## 📡 REST API

### Health & Status
```bash
GET /health                    # Service health check
GET /api/hello                # Backend status with real-time stats  
GET /api/realtime/stats       # WebSocket connection statistics
```

### Projects
```bash
GET  /api/project-templates              # Available project templates
GET  /api/project-templates/:templateId # Specific template details
POST /api/projects                       # Create new project
```

**Create Project Request:**
```json
{
  "name": "My Project",
  "description": "Project description", 
  "path": "/path/to/project",
  "githubOrigin": "https://github.com/user/repo",
  "templateId": "vcorp_standard"
}
```

### Project Data  
```bash
GET /api/projects/:id/initial-data    # Complete project data (single call)
GET /api/collections/:id/details      # Collection with documents and progress
GET /api/jobs/:id/details            # Job details with execution info
```

### Agents
```bash
POST /api/agents/launch               # Launch agents for a project
```

**Launch Agents Request:**
```json
{
  "projectId": 123,
  "role": "fe",         // Role short_name (e.g., "fe", "be", "ai")
  "count": 2            // Number of agents to create (1-10)
}
```

### Documents
```bash
PATCH /api/documents/:id/ready        # Update document ready status
GET   /api/documents/ready            # Get all ready documents
GET   /api/documents/ready/:projectId # Get ready documents for project
```

**Update Document Ready Status:**
```json
{
  "ready": true         // true = ready, false = not ready
}
```

### Testing & Development
```bash
POST /api/test/emit-event              # Emit test real-time event
POST /api/test/update-document-status  # Update document status (triggers real-time)
```

**Document Status Update:**
```json
{
  "documentId": 123,
  "status": "in_progress",  // blocked | ready | in_progress | done
  "agentId": "agent-uuid-123"
}
```

## 🗄️ Database

**PostgreSQL** with **Prisma ORM** for type-safe operations:
- Projects → Squads → Roles (team structure) 
- Workflows → Jobs (document processing pipeline)
- Document Collections → Documents (with status lifecycle)
- Real-time triggers for instant WebSocket updates

**📖 Detailed documentation: [docs/database.md](docs/database.md)**

## 📁 Project Structure

```
vcorpstate/
├── backend/                    # TypeScript backend with Prisma ORM
│   ├── db/                    # SQL schema and trigger setup  
│   ├── prisma/                # Prisma schema and migrations
│   ├── generated/             # Auto-generated Prisma client
│   ├── services/              # Database and real-time services
│   ├── routes/                # API route handlers
│   ├── templates/             # Project and job templates
│   └── server.ts              # Main server file
├── frontend/                   # ClojureScript frontend
│   ├── src/vcorpstate/        # Re-frame application source
│   ├── public/                # Static assets and compiled JS
│   └── shadow-cljs.edn        # Build configuration
├── docs/                       # Architecture and API documentation
│   ├── database.md            # Database schema and Prisma details
│   └── real-time-graph-*.md   # Real-time architecture docs
└── docker-compose.yml         # PostgreSQL container setup
```

## Development

The frontend uses shadow-cljs for hot reloading. Changes to ClojureScript files are automatically compiled and reloaded in the browser.

The backend uses Bun with `--watch` for automatic restart on file changes.

## Ports

All ports are configurable via environment variables:
- Frontend: `FRONTEND_PORT` (default: 3000)
- Backend: `BACKEND_PORT` (default: 3001)  
- PostgreSQL: `POSTGRES_PORT` (default: 5432)
- Shadow-cljs: `SHADOW_CLJS_PORT` (default: 9630)

No hardcoded ports anywhere in the codebase.

## 📚 Documentation

- **[Database Schema & Prisma ORM](docs/database.md)** - Complete database documentation
- **[Real-Time Architecture](docs/real-time-graph-architecture.md)** - WebSocket and trigger system details
- **[Graph Reference](docs/graph-reference.md)** - Frontend graph visualization guide

## 🔧 Development Tips

**Backend Development:**
```bash
cd backend
bun --watch server.ts     # Auto-restart on changes
npm run db:generate       # Regenerate Prisma client after schema changes
```

**Testing REST APIs:**
```bash
# Health check
curl http://localhost:3001/health

# Create project
curl -X POST http://localhost:3001/api/projects \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","path":"/tmp/test","templateId":"vcorp_standard"}'

# Get project data  
curl http://localhost:3001/api/projects/1/initial-data
```

**Real-time Testing:**
```bash
# Trigger document status change (fires real-time event)
curl -X POST http://localhost:3001/api/test/update-document-status \
  -H "Content-Type: application/json" \
  -d '{"documentId":1,"status":"in_progress","agentId":"test-123"}'
```
