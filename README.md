# VCorpState

VCorp State Management Platform - A document transformation pipeline using AI agents.

## Quick Start

Run the entire stack with one command:

```bash
pnpm start
```

This will:
- Start PostgreSQL in Docker
- Start the Node.js backend with Bun 
- Start the Re-frame frontend with shadow-cljs and hot reload

Open http://localhost:3000 and select a project to test the connection.

## Prerequisites

- [pnpm](https://pnpm.io/) - Package manager
- [Docker](https://docker.com/) - For PostgreSQL database
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
- `pnpm dev` - Alias for start
- `pnpm backend:dev` - Start only backend
- `pnpm frontend:dev` - Start only frontend
- `pnpm build` - Build frontend for production
- `pnpm docker` - Start full containerized stack
- `pnpm docker:prod` - Start containerized stack in background
- `pnpm stop` - Stop all services

## Database Setup

The database schema is automatically applied when the backend starts. Schema file: `backend/db/schema.sql`

## Architecture

- **Frontend**: Re-frame (ClojureScript) with Reagent, shadow-cljs build, Tailwind CSS
- **Backend**: Node.js with Express (run with Bun), PostgreSQL with connection pooling
- **Database**: PostgreSQL with automatic schema migration and environment-based configuration
- **Container**: Multi-service Docker Compose with health checks

## Project Structure

```
vcorpstate/
├── backend/                 # Node.js API server
│   ├── db/                 # Database schema and migrations
│   ├── templates/          # Role templates
│   └── server.js          # Main server file
├── frontend/               # ClojureScript frontend
│   ├── src/vcorpstate/    # Application source
│   ├── public/            # Static assets
│   └── shadow-cljs.edn    # Build configuration
├── docs/                   # Architecture and design documents
└── docker-compose.yml     # Container orchestration
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
