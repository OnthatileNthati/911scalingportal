const pool = require('./pool');

async function test() {
  const result = await pool.query('SELECT * FROM sales');
  console.log(result.rows);
  await pool.end();
}
test();