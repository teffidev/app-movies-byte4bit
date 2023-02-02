const {Comment} = require("./../models/indexModels");

const getComments = async (req, res) => {
    const movies = await Comment.find();
    console.log(movies);
    res.send(movies);
};

const getCommentById = async (req, res) => {
    const movie = await Comment.findById(req.params.id);
    console.log(movie);
    res.send(movie);
};

const createComments = async (req, res) => {
    const movie = new Comment(req.body);
    await movie.save();
    console.log(movie);
    res.send(movie);
};

const updateComments = async (req, res) => {
    const movie = await Comment.findByIdAndUpdate(req.params.id, req.body);
    console.log(movie);
    res.send(movie);
};

const deleteComments = async (req, res) => {
    const movie = await Comment.findByIdAndDelete(req.params.id);
    console.log(movie);
    res.send(movie);
};

module.exports = { getComments, getCommentById, createComments, updateComments, deleteComments };