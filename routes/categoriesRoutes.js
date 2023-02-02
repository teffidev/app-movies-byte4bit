const express = require("express");
const router = express.Router();
const {getCategories, getCategoryById, createCategories, updateCategories, deleteCategories} = require("./../controllers/categoryControllers");

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategories);
router.put("/:id", updateCategories);
router.delete("/:id", deleteCategories);

module.exports = router;