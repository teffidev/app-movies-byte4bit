const {User} = require("../models/indexModels");

const getUsers = async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.send(users);
};

const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user);
    res.send(user);
};

const createUsers = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    console.log(user);
    res.send(user);
};

const updateUsers = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    console.log(user);
    res.send(user);
};

const deleteUsers = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(user);
    res.send(user);
};

module.exports = { getUsers, getUserById, createUsers, updateUsers, deleteUsers };