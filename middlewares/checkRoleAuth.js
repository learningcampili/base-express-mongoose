const User = require("../models/User");
const CustomError = require("../models/customError");
const { verifyToken } = require("../utils/verifyToken");

const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    if (!req.token.id) {
      throw new CustomError("You Are not allow to do this - no id", 403);
    }
    // Find user by token data _id
    const userData = await User.findById(req.token.id);

    // Example: Check if user role is included in the allowed roles
    if (!roles.includes(userData.role)) {
      throw new CustomError("You Are not allow to do this", 403);
      //return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkRoleAuth,
};
