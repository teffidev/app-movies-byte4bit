const {Movie} = require("../models/indexModels");

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    console.log(movies);
    res.send(movies);
};

const getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    res.send(movie);
};

const createMovies = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    console.log(movie);
    res.send(movie);
};

const updateMovies = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    console.log(movie);
    res.send(movie);
};

const deleteMovies = async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    console.log(movie);
    res.send(movie);
};

module.exports = { getMovies, getMovieById, createMovies, updateMovies, deleteMovies };