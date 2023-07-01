const { Router } = require("express");

const { login, register } = require("../controllers/auth");

const { validateLogin, validateRegister } = require("../validators/auth");

const router = Router();

router.post("/login", validateLogin, login);
router.post("/register", validateRegister, register);

module.exports = router;
