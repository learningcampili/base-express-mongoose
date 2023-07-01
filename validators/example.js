const { check } = require("express-validator");
const { handleValidator } = require("../utils/handleValidator");
//Allways base on the Model

const validateExampleCreate = [
  // check("name","The field is required").exists().notEmpty(),
  // check("album","The field is required").exists().notEmpty(),
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

const validateExampleUpdate = [
  // check("id").exists().notEmpty(),
  // check("name").exists().notEmpty(),
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

module.exports = { validateExampleCreate, validateExampleUpdate };
