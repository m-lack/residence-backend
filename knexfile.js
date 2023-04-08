require("dotenv").config();

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD,
      host: PGHOST,
      port: PGPORT,
    },
    pool: {
      min: 0,
      max: 50,
    },
  },
};
