const { Pool } = require('pg');
require('dotenv').config();
/*
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})
*/
// Use DATABASE_URL for cloud deployment, fallback to individual variables for local development
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the database URL directly
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, // Only enable SSL for cloud-based DB
});

module.exports = pool;