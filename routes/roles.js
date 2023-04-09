const express = require("express");
const {
  getRoles,
  postRole,
  getRole,
  putRole,
  deleteRole,
} = require("../controllers/roles");
const checkAuth = require("../middleware/auth");
const router = express.Router();

router.get("/roles", getRoles);
router.post("/roles", postRole);
router.get("/roles/:id", getRole);
router.put("/roles/:id", putRole);
router.delete("/roles/:id", deleteRole);

module.exports = router;
