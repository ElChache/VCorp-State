-- CreateTable
CREATE TABLE "public"."projects" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "path" VARCHAR(500) NOT NULL,
    "github_origin" VARCHAR(500),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."agents" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "role" VARCHAR(50) NOT NULL DEFAULT 'pd',
    "first_launched_at" TIMESTAMP(3),
    "last_launched_at" TIMESTAMP(3),
    "status" VARCHAR(20) NOT NULL DEFAULT 'idle',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."squads" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "color" VARCHAR(7) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "squads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."roles" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "short_name" VARCHAR(50) NOT NULL,
    "long_name" VARCHAR(255) NOT NULL,
    "squad_slug" VARCHAR(50) NOT NULL,
    "description_for_agent" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."workflows" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "initial_state" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workflows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."jobs" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "workflow_id" INTEGER NOT NULL,
    "inputs" JSONB NOT NULL DEFAULT '[]',
    "outputs" JSONB NOT NULL DEFAULT '[]',
    "auto_start" BOOLEAN NOT NULL DEFAULT true,
    "auto_complete" BOOLEAN NOT NULL DEFAULT true,
    "in_progress" BOOLEAN NOT NULL DEFAULT false,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completed_at" TIMESTAMP(3),
    "last_processed_at" TIMESTAMP(3),
    "paused" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."document_collections" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "path" VARCHAR(500),
    "document_type" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."documents" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "document_collection_id" INTEGER,
    "slug" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "file_path" VARCHAR(500),
    "document_type" VARCHAR(100) NOT NULL,
    "parent_document_id" INTEGER,
    "blocked_by" JSONB NOT NULL DEFAULT '[]',
    "status" VARCHAR(50) NOT NULL DEFAULT 'ready',
    "assigned_to_role" VARCHAR(50),
    "picked_by_agent_id" VARCHAR(255),
    "ready" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."workflow_states" (
    "id" SERIAL NOT NULL,
    "workflow_id" INTEGER NOT NULL,
    "state_name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "previous_state_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workflow_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."agent_job_statuses" (
    "id" SERIAL NOT NULL,
    "agent_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "current_workflow_state_id" INTEGER,
    "last_worked_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agent_job_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."job_document_snapshots" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "document_id" INTEGER NOT NULL,
    "document_slug" VARCHAR(100) NOT NULL,
    "content_snapshot" TEXT NOT NULL,
    "document_last_updated_at" TIMESTAMP(3) NOT NULL,
    "processed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processing_agent_id" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_document_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_name_key" ON "public"."projects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "agents_project_id_slug_key" ON "public"."agents"("project_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "squads_project_id_slug_key" ON "public"."squads"("project_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "roles_project_id_short_name_key" ON "public"."roles"("project_id", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "workflows_project_id_slug_key" ON "public"."workflows"("project_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "jobs_project_id_slug_key" ON "public"."jobs"("project_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "document_collections_project_id_slug_key" ON "public"."document_collections"("project_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "documents_project_id_slug_key" ON "public"."documents"("project_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "workflow_states_workflow_id_state_name_key" ON "public"."workflow_states"("workflow_id", "state_name");

-- CreateIndex
CREATE UNIQUE INDEX "agent_job_statuses_agent_id_job_id_key" ON "public"."agent_job_statuses"("agent_id", "job_id");

-- CreateIndex
CREATE UNIQUE INDEX "job_document_snapshots_job_id_document_id_key" ON "public"."job_document_snapshots"("job_id", "document_id");

-- AddForeignKey
ALTER TABLE "public"."agents" ADD CONSTRAINT "agents_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."agents" ADD CONSTRAINT "agents_project_id_role_fkey" FOREIGN KEY ("project_id", "role") REFERENCES "public"."roles"("project_id", "short_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."squads" ADD CONSTRAINT "squads_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_project_id_squad_slug_fkey" FOREIGN KEY ("project_id", "squad_slug") REFERENCES "public"."squads"("project_id", "slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."workflows" ADD CONSTRAINT "workflows_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."jobs" ADD CONSTRAINT "jobs_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."jobs" ADD CONSTRAINT "jobs_workflow_id_fkey" FOREIGN KEY ("workflow_id") REFERENCES "public"."workflows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."document_collections" ADD CONSTRAINT "document_collections_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."documents" ADD CONSTRAINT "documents_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."documents" ADD CONSTRAINT "documents_document_collection_id_fkey" FOREIGN KEY ("document_collection_id") REFERENCES "public"."document_collections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."documents" ADD CONSTRAINT "documents_parent_document_id_fkey" FOREIGN KEY ("parent_document_id") REFERENCES "public"."documents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."workflow_states" ADD CONSTRAINT "workflow_states_workflow_id_fkey" FOREIGN KEY ("workflow_id") REFERENCES "public"."workflows"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."workflow_states" ADD CONSTRAINT "workflow_states_previous_state_id_fkey" FOREIGN KEY ("previous_state_id") REFERENCES "public"."workflow_states"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."agent_job_statuses" ADD CONSTRAINT "agent_job_statuses_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."agent_job_statuses" ADD CONSTRAINT "agent_job_statuses_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."agent_job_statuses" ADD CONSTRAINT "agent_job_statuses_current_workflow_state_id_fkey" FOREIGN KEY ("current_workflow_state_id") REFERENCES "public"."workflow_states"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."job_document_snapshots" ADD CONSTRAINT "job_document_snapshots_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."job_document_snapshots" ADD CONSTRAINT "job_document_snapshots_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "public"."documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
