const { check } = require("express-validator");
const { handleValidator } = require("../utils/handleValidator");

const validateId = [
  check("id").exists().isMongoId().withMessage("Enter a vaild Id"),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

module.exports = { validateId };
