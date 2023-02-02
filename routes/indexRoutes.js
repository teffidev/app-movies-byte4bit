const express = require("express");
const router = express.Router();

const moviesRoutes = require("./moviesRoutes");
const usersRoutes = require("./usersRoutes");
const categoriesRoutes = require("./categoriesRoutes");
const commentsRoutes = require("./commentsRoutes");
const authRoutes = require("./authRoutes");

router.use("/movies", moviesRoutes);  
router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/comments", commentsRoutes);
router.use("/register", authRoutes);
router.use("/login", authRoutes);


module.exports = router;