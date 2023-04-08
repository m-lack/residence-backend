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
router.post("/roles", checkAuth, postRole);
router.get("/roles/:id", checkAuth, getRole);
router.put("/roles/:id", checkAuth, putRole);
router.delete("/roles/:id", checkAuth, deleteRole);

module.exports = router;
