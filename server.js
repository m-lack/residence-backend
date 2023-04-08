const http = require("http");
const app = require("./app");
const { Client } = require("pg");

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const connectionString = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

const client = new Client({
  connectionString: connectionString,
});

const port = process.env.PORT || 5000;

const server = http.createServer(app);
client
  .connect()
  .then(
    server.listen(port, () => {
      console.log(`🌐 app listening at http://localhost:${port}`);
    })
  )
  .catch((err) => {
    console.log(`🌐 error running cause : ${err.stack}`);
    client.end();
  });
