const {Category} = require("./../models/indexModels");

const getCategories = async (req, res) => {
    const movies = await Category.find();
    console.log(movies);
    res.send(movies);
};

const getCategoryById = async (req, res) => {
    const movie = await Category.findById(req.params.id);
    console.log(movie);
    res.send(movie);
};

const createCategories = async (req, res) => {
    const movie = new Category(req.body);
    await movie.save();
    console.log(movie);
    res.send(movie);
};

const updateCategories = async (req, res) => {
    const movie = await Category.findByIdAndUpdate(req.params.id, req.body);
    console.log(movie);
    res.send(movie);
};

const deleteCategories = async (req, res) => {
    const movie = await Category.findByIdAndDelete(req.params.id);
    console.log(movie);
    res.send(movie);
};

module.exports = { getCategories, getCategoryById, createCategories, updateCategories, deleteCategories };