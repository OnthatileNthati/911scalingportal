const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', 'Portal', '.env') });
const { Client } = require('pg');

(async () => {
  // connect to default 'postgres' database, not 911scaling
  const client = new Client({
    connectionString: process.env.DATABASE_URL.replace('/911scaling', '/postgres')
  });
  await client.connect();
  await client.query('CREATE DATABASE "911scaling"');
  console.log('Database 911scaling created ✓');
  await client.end();
})();