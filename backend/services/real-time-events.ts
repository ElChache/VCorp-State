import { Client } from 'pg';
import { WebSocket, WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';

interface VCorpEvent {
  type: string;
  [key: string]: any;
}

interface ClientConnection {
  ws: WebSocket;
  projectId?: number;
  userId?: string;
  connected: boolean;
}

export class RealTimeEventService {
  private pgClient: Client;
  private wsServer: WebSocketServer;
  private clients: Map<WebSocket, ClientConnection> = new Map();
  private isListening = false;

  constructor(
    private connectionString: string,
    private port: number = 3002
  ) {
    this.pgClient = new Client({ connectionString });
    this.wsServer = new WebSocketServer({ 
      port,
      path: '/ws'
    });
    
    this.setupWebSocketServer();
  }

  // =====================================================
  // POSTGRESQL NOTIFY LISTENER
  // =====================================================

  async startListening(): Promise<void> {
    if (this.isListening) return;

    try {
      await this.pgClient.connect();
      
      // Listen for notifications on vcorp_events channel
      await this.pgClient.query('LISTEN vcorp_events');
      
      // Handle notification events
      this.pgClient.on('notification', (msg) => {
        try {
          if (msg.channel === 'vcorp_events' && msg.payload) {
            const event: VCorpEvent = JSON.parse(msg.payload);
            this.broadcastEvent(event);
          }
        } catch (error) {
          console.error('Error parsing notification:', error);
        }
      });

      this.isListening = true;
      console.log('🔔 Listening for PostgreSQL notifications on vcorp_events');
      
    } catch (error) {
      console.error('❌ Failed to start PostgreSQL listener:', error);
      throw error;
    }
  }

  async stopListening(): Promise<void> {
    if (!this.isListening) return;

    try {
      await this.pgClient.query('UNLISTEN vcorp_events');
      await this.pgClient.end();
      this.isListening = false;
      console.log('🔕 Stopped listening for PostgreSQL notifications');
    } catch (error) {
      console.error('Error stopping PostgreSQL listener:', error);
    }
  }

  // =====================================================
  // WEBSOCKET SERVER MANAGEMENT
  // =====================================================

  private setupWebSocketServer(): void {
    this.wsServer.on('connection', (ws: WebSocket, request: IncomingMessage) => {
      const connection: ClientConnection = {
        ws,
        connected: true
      };
      
      this.clients.set(ws, connection);
      console.log(`📱 New WebSocket connection (${this.clients.size} total)`);

      // Handle incoming messages from client
      ws.on('message', (data: Buffer) => {
        try {
          const message = JSON.parse(data.toString());
          this.handleClientMessage(ws, message);
        } catch (error) {
          console.error('Error parsing client message:', error);
        }
      });

      // Handle connection close
      ws.on('close', () => {
        this.clients.delete(ws);
        console.log(`📱 WebSocket disconnected (${this.clients.size} remaining)`);
      });

      // Handle errors
      ws.on('error', (error) => {
        console.error('WebSocket error:', error);
        this.clients.delete(ws);
      });

      // Send welcome message
      this.sendToClient(ws, {
        type: 'connection_established',
        message: 'Connected to VCorpState real-time events',
        timestamp: Date.now()
      });
    });

    console.log(`🌐 WebSocket server listening on port ${this.port}`);
  }

  // =====================================================
  // CLIENT MESSAGE HANDLING
  // =====================================================

  private handleClientMessage(ws: WebSocket, message: any): void {
    const connection = this.clients.get(ws);
    if (!connection) return;

    switch (message.type) {
      case 'subscribe_project':
        connection.projectId = parseInt(message.projectId);
        this.sendToClient(ws, {
          type: 'subscription_confirmed',
          projectId: connection.projectId,
          timestamp: Date.now()
        });
        console.log(`📡 Client subscribed to project ${connection.projectId}`);
        break;

      case 'unsubscribe_project':
        connection.projectId = undefined;
        this.sendToClient(ws, {
          type: 'unsubscription_confirmed',
          timestamp: Date.now()
        });
        break;

      case 'ping':
        this.sendToClient(ws, {
          type: 'pong',
          timestamp: Date.now()
        });
        break;

      default:
        console.log('Unknown message type:', message.type);
    }
  }

  // =====================================================
  // EVENT BROADCASTING
  // =====================================================

  private broadcastEvent(event: VCorpEvent): void {
    const projectId = event.project_id;
    
    // Log the event for debugging
    console.log(`📡 Broadcasting event: ${event.type}`, {
      project_id: projectId,
      timestamp: new Date().toISOString()
    });

    let sentCount = 0;

    // Send to all clients subscribed to this project
    this.clients.forEach((connection, ws) => {
      if (connection.connected && connection.projectId === projectId) {
        this.sendToClient(ws, event);
        sentCount++;
      }
    });

    if (sentCount > 0) {
      console.log(`📤 Event sent to ${sentCount} client(s)`);
    }
  }

  private sendToClient(ws: WebSocket, data: any): void {
    try {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error sending to client:', error);
    }
  }

  // =====================================================
  // MANUAL EVENT EMISSION (for testing)
  // =====================================================

  async emitTestEvent(projectId: number, eventData: Partial<VCorpEvent>): Promise<void> {
    const event: VCorpEvent = {
      type: 'manual_test',
      project_id: projectId,
      timestamp: Date.now(),
      ...eventData
    };

    // Emit via PostgreSQL (will come back through notification)
    try {
      await this.pgClient.query(
        'SELECT emit_test_event($1)',
        [JSON.stringify(event)]
      );
    } catch (error) {
      console.error('Failed to emit test event:', error);
    }
  }

  // =====================================================
  // STATUS & UTILITIES
  // =====================================================

  getStats() {
    return {
      connectedClients: this.clients.size,
      isListening: this.isListening,
      clients: Array.from(this.clients.values()).map(conn => ({
        projectId: conn.projectId,
        connected: conn.connected
      }))
    };
  }

  async close(): Promise<void> {
    console.log('🔌 Shutting down real-time event service...');
    
    // Close all WebSocket connections
    this.clients.forEach((connection, ws) => {
      ws.close();
    });
    this.clients.clear();

    // Close WebSocket server
    this.wsServer.close();

    // Stop PostgreSQL listener
    await this.stopListening();

    console.log('✅ Real-time event service shut down');
  }
}