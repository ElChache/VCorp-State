import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

// Services
import { DatabaseService } from './services/database.js';
import { RealTimeEventService } from './services/real-time-events.js';
import { ProjectSeedingService } from './services/project-seeding.js';
import { FileWatcherService } from './services/file-watcher/index.js';

// Routes
import { createHealthRoutes } from './routes/health.js';
import { createDataRoutes } from './routes/data.js';
import { createTestingRoutes } from './routes/testing.js';
import { createTemplateRoutes } from './routes/templates.js';
import { createProjectRoutes } from './routes/projects.js';
import { createFileWatcherRoutes } from './routes/file-watcher.js';
import agentsRoutes from './routes/agents.js';
import documentsRoutes from './routes/documents.js';

const app = express();
const port = process.env.BACKEND_PORT || process.env.PORT || 3001;
const wsPort = parseInt(process.env.WS_PORT || '3002');

const connectionString = process.env.DATABASE_URL || 
  `postgresql://${process.env.POSTGRES_USER || 'vcorp'}:${process.env.POSTGRES_PASSWORD || 'vcorp123'}@${process.env.POSTGRES_HOST || 'localhost'}:${process.env.POSTGRES_PORT || 5432}/${process.env.POSTGRES_DB || 'vcorpstate'}`;

// Initialize services
const db = new DatabaseService();
const realTimeEvents = new RealTimeEventService(connectionString, wsPort);
const seedingService = new ProjectSeedingService();
const fileWatcher = new FileWatcherService(db, realTimeEvents);

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3003', 'http://localhost:8000'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use(createHealthRoutes(realTimeEvents));
app.use(createDataRoutes(db));
app.use(createTestingRoutes(db, realTimeEvents));
app.use(createTemplateRoutes());
app.use(createProjectRoutes(seedingService, fileWatcher));
app.use('/api/file-watcher', createFileWatcherRoutes(fileWatcher, db));
app.use('/api/agents', agentsRoutes);
app.use('/api/documents', documentsRoutes);

// Server startup & shutdown
async function startServer() {
  try {
    await realTimeEvents.startListening();
    
    // Auto-start file watchers for existing projects
    await startFileWatchersForAllProjects();
    
    app.listen(port, () => {
      console.log(`🚀 VCorpState Backend running on http://localhost:${port}`);
      console.log(`🌐 WebSocket server running on ws://localhost:${wsPort}/ws`);
      console.log('📡 Real-time events: ACTIVE');
      console.log('👁️  File watchers: AUTO-STARTED');
      console.log('');
      console.log('Architecture:');
      console.log('  - PostgreSQL triggers → NOTIFY events');  
      console.log('  - WebSocket broadcasts → Frontend updates');
      console.log('  - Frontend builds graph from local state');
      console.log('  - Zero polling, instant visualization updates');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Auto-start file watchers for all projects with valid paths
async function startFileWatchersForAllProjects() {
  try {
    const projects = await db.transaction(async (prisma) => {
      return await prisma.project.findMany({
        select: {
          id: true,
          name: true,
          path: true
        }
      });
    }).then(projects => projects.filter(p => p.path !== null && p.path !== undefined && p.path.trim() !== ''));

    console.log(`👁️  Starting file watchers for ${projects.length} projects...`);
    
    for (const project of projects) {
      try {
        await fileWatcher.startWatching({
          projectId: project.id,
          projectPath: project.path!,
        });
        console.log(`✅ File watcher started for project "${project.name}" (${project.path})`);
      } catch (error) {
        console.error(`❌ Failed to start file watcher for project "${project.name}":`, error);
      }
    }
  } catch (error) {
    console.error('❌ Error auto-starting file watchers:', error);
  }
}

// Graceful shutdown
const shutdown = async () => {
  console.log('🛑 Shutting down gracefully...');
  await fileWatcher.close();
  await realTimeEvents.close();
  await db.close();
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Start the server
startServer();