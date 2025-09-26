# VCorpState Database Setup & Modification Guide

## 🚀 Quick Start (Development)

### 1. Start PostgreSQL
```bash
# Start PostgreSQL via Docker Compose
docker-compose up -d postgres

# Verify it's running
docker-compose ps
```

### 2. Choose Your Setup Method

#### Option A: Fresh Development Setup (Recommended)
```bash
# 1. Update Prisma schema if needed
# Edit: backend/prisma/schema.prisma

# 2. Push schema to database (no migration files)
cd backend
DATABASE_URL="postgresql://vcorp:vcorp123@localhost:5432/vcorpstate" npx prisma db push

# 3. Generate TypeScript client
npx prisma generate

# 4. Apply triggers (real-time system)
bun db:triggers
```

#### Option B: Production Migration Workflow
```bash
# 1. Update Prisma schema
# Edit: backend/prisma/schema.prisma

# 2. Create migration
npx prisma migrate dev --name "describe-your-change"

# 3. Apply triggers
bun db:triggers
```

## 📋 Database Architecture

### Schema Management
- **Primary**: `backend/prisma/schema.prisma` (source of truth)
- **Legacy**: `backend/db/schema.sql` (for reference, not used)
- **Triggers**: `backend/db/triggers.sql` (real-time system)

### Two-Layer System
1. **Database Schema** → Managed by Prisma
2. **Triggers/Functions** → Managed separately via `triggers.sql`

## 🔧 Common Operations

### Making Schema Changes

#### 1. Add/Remove/Modify Columns
```bash
# Edit backend/prisma/schema.prisma
# Example: Make field nullable
file_path String? @db.VarChar(500)  # Added ? for nullable

# Push to database
npx prisma db push

# Update TypeScript types
npx prisma generate
```

#### 2. Add New Tables
```bash
# Add model to backend/prisma/schema.prisma
model NewTable {
  id         Int      @id @default(autoincrement())
  project_id Int
  name       String   @db.VarChar(255)
  created_at DateTime @default(now())
  updated_at DateTime @default(now()) @updatedAt
  
  project Project @relation(fields: [project_id], references: [id])
  @@map("new_tables")
}

# Push changes
npx prisma db push
npx prisma generate
```

#### 3. Modify Real-Time Triggers
```bash
# Edit backend/db/triggers.sql
# Add/modify notification functions or triggers

# Apply changes
bun db:triggers
```

### Database Operations

#### Reset Everything (Development Only)
```bash
# ⚠️  DESTROYS ALL DATA
npx prisma migrate reset --force
bun db:triggers
```

#### Check Database Status
```bash
# View current schema
npx prisma db pull

# See what would change
npx prisma db push --preview-feature
```

#### Troubleshooting Connection
```bash
# Test database connection
npx prisma db execute --stdin < /dev/null

# Check PostgreSQL is running
docker-compose ps
lsof -i :5432
```

## 🏗️ Development vs Production

### Development Setup
- Use `prisma db push` for rapid prototyping
- No migration files created
- Easy to reset and rebuild

### Production Setup  
- Use `prisma migrate dev` to create migration files
- Keeps migration history
- Safer for data preservation

## 🔥 Emergency Procedures

### Database Won't Start
```bash
# Force restart PostgreSQL
docker-compose down
docker-compose up -d postgres

# Check logs
docker-compose logs postgres
```

### Schema Out of Sync
```bash
# Fix client mismatch
npx prisma generate

# Reset to Prisma schema (DESTROYS DATA)
npx prisma db push --force-reset
bun db:triggers
```

### Triggers Not Working
```bash
# Reapply all triggers
cd backend
bun db:triggers

# Check trigger status in PostgreSQL
# Connect and run: \d+ documents to see triggers
```

## 📝 Environment Setup

Required in `.env`:
```bash
DATABASE_URL=postgresql://vcorp:vcorp123@localhost:5432/vcorpstate
```

## ⚡ Real-Time System

The database uses PostgreSQL triggers to broadcast changes via WebSocket:

1. **Data Changes** → PostgreSQL Triggers
2. **Triggers** → `pg_notify('vcorp_events', payload)`  
3. **Backend Service** → Listens for notifications
4. **WebSocket** → Broadcasts to frontend clients
5. **Frontend** → Updates graph in real-time

### Trigger Types
- **updated_at**: Auto-update timestamps
- **document_status_changed**: Document workflow events  
- **job_status_changed**: Job completion events
- **collection_progress_updated**: Aggregate statistics

## 🚫 What NOT To Do

❌ **Never manually edit** `backend/db/schema.sql`  
❌ **Never run** raw SQL schema changes without Prisma  
❌ **Never skip** `npx prisma generate` after schema changes  
❌ **Never forget** to run `bun db:triggers` after trigger changes  

## ✅ Proper Workflow Summary

1. **Schema Changes**: Edit `prisma/schema.prisma` → `npx prisma db push` → `npx prisma generate`
2. **Trigger Changes**: Edit `db/triggers.sql` → `bun db:triggers`  
3. **Fresh Setup**: `docker-compose up -d postgres` → `npx prisma db push` → `bun db:triggers`
4. **Production**: Use `npx prisma migrate dev` instead of `db push`