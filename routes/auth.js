const express = require("express");
const { postLogin } = require("../controllers/auth");
const router = express.Router();

router.route("/login").post(postLogin);

module.exports = router;
