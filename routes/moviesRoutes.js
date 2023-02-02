const express = require("express");
const router = express.Router();
const {getMovies, getMovieById, createMovies, updateMovies, deleteMovies} = require("./../controllers/movieControllers");

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovies);
router.put("/:id", updateMovies);
router.delete("/:id", deleteMovies);

module.exports = router;