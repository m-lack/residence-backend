const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "200220",
  host: "localhost",
  port: 5432,
  database: "residence",
});

module.exports = pool;
