const { check } = require("express-validator");
const { handleValidator } = require("../utils/handleValidator");
//Allways base on the Model

const validateLogin = [
  check("email", "The email is required")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Enter a valid email"),
  check("password", "The password is required").exists().notEmpty(),
  // check("mediaId").exists().notEmpty().isMongoId(),
  // check("cover").exists().notEmpty().isURL(),
  // check("artist").exists().notEmpty(),
  // check("artist.name").exists().notEmpty(),
  // check("artist.nickname").exists().notEmpty(),
  // check("artist.nationality").exists().notEmpty(),
  // check("duration.start").exists().notEmpty(),
  // check("duration.end").exists().notEmpty(),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

const validateRegister = [
  check("name", "The mail is required")
    .exists()
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("The name must have at least 3 characters"),
  check("email", "The email is required")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Enter a valid email"),
  check("password", "The password is required").exists().notEmpty(),
  // check("album").exists().notEmpty(),
  // check("mediaId").exists().notEmpty().isMongoId(),
  // check("cover").exists().notEmpty().isURL(),
  // check("artist").exists().notEmpty(),
  // check("artist.name").exists().notEmpty(),
  // check("artist.nickname").exists().notEmpty(),
  // check("artist.nationality").exists().notEmpty(),
  // check("duration.start").exists().notEmpty(),
  // check("duration.end").exists().notEmpty(),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

module.exports = { validateLogin, validateRegister };
