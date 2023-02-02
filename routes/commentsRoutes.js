const express = require("express");
const router = express.Router();
const {getComments, getCommentById, createComments, updateComments, deleteComments} = require("./../controllers/commentControllers");

router.get("/", getComments);
router.get("/:id", getCommentById);
router.post("/", createComments);
router.put("/:id", updateComments);
router.delete("/:id", deleteComments);

module.exports = router;