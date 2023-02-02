const express = require("express");
const router = express.Router();
const {getUsers, getUserById, createUsers, updateUsers, deleteUsers} = require("./../controllers/userControllers");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;