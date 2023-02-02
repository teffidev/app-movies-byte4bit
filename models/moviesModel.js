const mongoose = require("mongoose");

const MovieShema = new mongoose.Schema(
    {
        title: String,
        genre: String
    }
);

const Movie = mongoose.model("Movie", MovieShema);

module.exports = Movie;