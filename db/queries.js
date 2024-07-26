const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(x, y, z) {
  //await pool.query('INSERT INTO messages VALUES ($1, $2, $3)', [x, y, z]);
  await pool.query(
    'INSERT INTO messages (text, username, date) VALUES ($1, $2, $3);',
    [x, y, z]
  );
}

async function resetMessage(){
  await pool.query('DELETE FROM messages');
}

module.exports = {
  getAllMessages,
  insertMessage,
  resetMessage,
};
