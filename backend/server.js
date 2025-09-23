require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.BACKEND_PORT || process.env.PORT || 3001;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.POSTGRES_USER || 'vcorp'}:${process.env.POSTGRES_PASSWORD || 'vcorp123'}@${process.env.POSTGRES_HOST || 'localhost'}:${process.env.POSTGRES_PORT || 5432}/${process.env.POSTGRES_DB || 'vcorpstate'}`
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/hello', async (req, res) => {
  try {
    // Test database connection
    const result = await pool.query('SELECT NOW() as timestamp');
    
    res.json({
      message: 'Hello World from VCorpState! 🚀',
      timestamp: result.rows[0].timestamp,
      status: 'Backend and PostgreSQL are working!'
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({
      message: 'Hello World from VCorpState! (DB connection failed)',
      error: err.message
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'vcorpstate-backend' });
});

app.listen(port, () => {
  console.log(`VCorpState backend running on http://localhost:${port}`);
});