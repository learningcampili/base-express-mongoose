const jwt = require("jsonwebtoken");
const CustomError = require("../models/customError");

const verifyToken = async (token) => {
  try {
    // Verify JWT token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    // Return the decoded data

    //console.log("decoded", decoded);// devuelve el id del token
    return decoded;
  } catch (error) {
    // Throw an error if token is not valid
    throw new CustomError(error.message, 500);
  }
};

module.exports = {
  verifyToken,
};
