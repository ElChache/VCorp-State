import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

// Services
import { PrismaDatabaseService } from './services/prisma-database.js';
import { RealTimeEventService } from './services/real-time-events.js';
import { PrismaProjectSeedingService } from './services/prisma-project-seeding.js';

// Routes
import { createHealthRoutes } from './routes/health.js';
import { createDataRoutes } from './routes/data.js';
import { createTestingRoutes } from './routes/testing.js';
import { createTemplateRoutes } from './routes/templates.js';
import { createPrismaProjectRoutes } from './routes/prisma-projects.js';

const app = express();
const port = process.env.BACKEND_PORT || process.env.PORT || 3001;
const wsPort = parseInt(process.env.WS_PORT || '3002');

const connectionString = process.env.DATABASE_URL || 
  `postgresql://${process.env.POSTGRES_USER || 'vcorp'}:${process.env.POSTGRES_PASSWORD || 'vcorp123'}@${process.env.POSTGRES_HOST || 'localhost'}:${process.env.POSTGRES_PORT || 5432}/${process.env.POSTGRES_DB || 'vcorpstate'}`;

// Initialize services
const db = new PrismaDatabaseService();
const realTimeEvents = new RealTimeEventService(connectionString, wsPort);
const seedingService = new PrismaProjectSeedingService();

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
app.use(createPrismaProjectRoutes(seedingService));

// Server startup & shutdown
async function startServer() {
  try {
    await realTimeEvents.startListening();
    
    app.listen(port, () => {
      console.log(`🚀 VCorpState Backend running on http://localhost:${port}`);
      console.log(`🌐 WebSocket server running on ws://localhost:${wsPort}/ws`);
      console.log('📡 Real-time events: ACTIVE');
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

// Graceful shutdown
const shutdown = async () => {
  console.log('🛑 Shutting down gracefully...');
  await realTimeEvents.close();
  await db.close();
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Start the server
startServer();