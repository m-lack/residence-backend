const express = require("express");
const { addUser } = require("../controllers/users");
const checkAuth = require("../middleware/auth");

const router = express.Router();

router.post("/users", addUser);

module.exports = router;
