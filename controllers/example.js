const CustomError = require("../models/customError");

const createExample = async (req, res, next) => {
  try {
    res.json({ message: "create Example" });
  } catch (error) {
    next(error);
  }
};

const getExamples = async (req, res, next) => {
  try {
    res.json({ message: "get All Examples" });
  } catch (error) {
    next(error);
  }
};

const getExample = async (req, res, next) => {
  try {
    res.json({ message: "get Example" });
    //throw new CustomError('Item Not found',404)
  } catch (error) {
    next(error);
  }
};

const updateExample = async (req, res, next) => {
  try {
    res.json({ message: "update Example" });
  } catch (error) {
    next(error);
  }
};

const deleteExample = async (req, res, next) => {
  try {
    res.json({ message: "delete Example" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createExample,
  getExamples,
  getExample,
  updateExample,
  deleteExample,
};
