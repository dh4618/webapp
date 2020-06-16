const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dh4618',
  host: 'db.doc.ic.ac.uk',
  database: 'dh4618',
  password: 'CBjjpTv51p',
  port: 5432,
});

module.exports = pool;