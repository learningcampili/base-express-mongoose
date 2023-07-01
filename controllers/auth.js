const User = require("../models/User");
const CustomError = require("../models/customError");

const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select(
      "name email password"
    );
    if (!user) {
      throw new CustomError("Invalid credentials", 404);
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      throw new CustomError("Invalid credentials", 401);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email: email });
    if (exists) {
      throw new CustomError("email is already in use", 400);
    }

    const user = new User({
      name,
      email,
      password,
    });

    const userSaved = await user.save();
    res.status(201).json(userSaved);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
};
