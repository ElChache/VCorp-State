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

Open the frontend URL (shown in console) and click "Fetch Hello World" to test the connection.

## Configuration

All ports and settings are configurable via environment variables in `.env`:

```bash
FRONTEND_PORT=3000
BACKEND_PORT=3001
POSTGRES_PORT=5432
POSTGRES_DB=vcorpstate
POSTGRES_USER=vcorp
POSTGRES_PASSWORD=vcorp123
```

## Commands

- `pnpm start` - Start all services (development mode)
- `pnpm docker` - Start full containerized stack
- `pnpm build` - Build frontend for production
- `pnpm stop` - Stop all services

## Architecture

- **Frontend**: Re-frame (ClojureScript) with shadow-cljs, environment-aware configuration
- **Backend**: Node.js with Express (run with Bun), environment-based configuration
- **Database**: PostgreSQL with configurable credentials
- **Container**: Docker Compose with environment variable support

## Ports

All ports are configurable via environment variables:
- Frontend: `FRONTEND_PORT` (default: 3000)
- Backend: `BACKEND_PORT` (default: 3001)  
- PostgreSQL: `POSTGRES_PORT` (default: 5432)

No hardcoded ports anywhere in the codebase.
