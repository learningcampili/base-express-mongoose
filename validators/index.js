const { validateExampleCreate, validateExampleUpdate } = require("./example");

const { validateId } = require("./general");

const { validateLogin, validateRegister } = require("./auth");

module.exports = {
  validateId,
  validateExampleCreate,
  validateExampleUpdate,
  validateLogin,
  validateRegister,
};
