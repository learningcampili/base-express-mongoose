const { Router } = require("express");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { checkAuth } = require("../middlewares/checkAuth");
const { checkRoleAuth } = require("../middlewares/checkRoleAuth");

// const {} = require('../validators/user');

const router = Router();

router.get("/", checkAuth, checkRoleAuth(["ADMIN_ROLE"]), getUsers);
router.get("/:id", checkAuth, checkRoleAuth(["ADMIN_ROLE"]), getUser);
router.delete("/:id", checkAuth, checkRoleAuth(["ADMIN_ROLE"]), deleteUser);

module.exports = router;
