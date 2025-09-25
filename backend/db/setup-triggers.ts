#!/usr/bin/env bun

import 'dotenv/config';
import { Pool } from 'pg';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 
    `postgresql://${process.env.POSTGRES_USER || 'vcorp'}:${process.env.POSTGRES_PASSWORD || 'vcorp123'}@${process.env.POSTGRES_HOST || 'localhost'}:${process.env.POSTGRES_PORT || 5432}/${process.env.POSTGRES_DB || 'vcorpstate'}`
});

async function setupTriggers() {
  const client = await pool.connect();
  
  try {
    console.log('📡 Setting up real-time triggers and notification functions...');
    
    // Read and execute the triggers SQL file
    const triggersSQL = readFileSync(join(__dirname, 'triggers.sql'), 'utf8');
    
    await client.query(triggersSQL);
    
    console.log('✅ Triggers and notification functions created successfully!');
    
    // Test the notification system
    console.log('🧪 Testing notification system...');
    
    await client.query("SELECT emit_test_event($1)", [JSON.stringify({
      type: 'system_test',
      message: 'Real-time system initialized',
      timestamp: Math.floor(Date.now() / 1000)
    })]);
    
    console.log('✅ Test event emitted successfully!');
    
    // Show current notification functions
    const result = await client.query(`
      SELECT routine_name, routine_type 
      FROM information_schema.routines 
      WHERE routine_name LIKE 'notify_%' 
        AND routine_schema = 'public'
      ORDER BY routine_name
    `);
    
    console.log('\n📋 Notification functions created:');
    result.rows.forEach(row => {
      console.log(`  - ${row.routine_name} (${row.routine_type})`);
    });
    
    // Show triggers
    const triggers = await client.query(`
      SELECT trigger_name, event_manipulation, event_object_table
      FROM information_schema.triggers
      WHERE trigger_name LIKE '%_change_trigger' OR trigger_name LIKE '%_created_trigger' OR trigger_name LIKE '%_progress_trigger'
      ORDER BY trigger_name
    `);
    
    console.log('\n🔄 Triggers created:');
    triggers.rows.forEach(row => {
      console.log(`  - ${row.trigger_name} on ${row.event_object_table} (${row.event_manipulation})`);
    });
    
    console.log('\n🚀 Real-time notification system is ready!');
    console.log('   Events will be emitted on channel: vcorp_events');
    
  } catch (error) {
    console.error('❌ Error setting up triggers:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

// Run setup
setupTriggers().catch(error => {
  console.error('Failed to setup triggers:', error);
  process.exit(1);
});