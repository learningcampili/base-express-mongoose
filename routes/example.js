const { Router } = require("express");

const {
  createExample,
  getExamples,
  getExample,
  updateExample,
  deleteExample,
} = require("../controllers/example");

const {
  validateId,
  validateExampleCreate,
  validateExampleUpdate,
} = require("../validators");

const router = Router();

router.post("/", validateExampleCreate, createExample);
router.get("/", getExamples);
router.get("/:id", validateId, getExample);
router.put("/:id", validateId, validateExampleUpdate, updateExample);
router.delete("/:id", validateId, deleteExample);

module.exports = router;
