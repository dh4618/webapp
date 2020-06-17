const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'paskala',
  password: 'daomubiji',
  port: 5432,
});

module.exports = pool;