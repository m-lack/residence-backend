require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(express.json());

app.post("/api/v1/residence", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO identifier(username) values ($1) returning *",
      [req.body.username]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        identifier: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/user", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO identifier(username) values ($1) returning *",
      [req.body.username]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        identifier: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/reclamation", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO reclamation(description, user_id) values ($1, 6) returning *",
      [req.body.description]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        reclamation: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
