const { Client } = require('pg');

const date = new Date();
const formattedDate = date.toISOString().slice(0, 10); // Use ISO format for dates

const createTableSql = `
  CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY,
    text VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    date TIMESTAMP NOT NULL
  );
`;

const insertSql = `
  INSERT INTO messages (text, username, date) VALUES ($1, $2, $3);
`;
async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: 'postgresql://ahmed:ahmed_mld@localhost:5432/messanger',
  });
  try {
    await client.connect();
    await client.query(createTableSql);
    await client.query(insertSql, ['enfin default text', 'Ahmed', formattedDate]);
    console.log('done');
  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    await client.end();
  }
}

main();
