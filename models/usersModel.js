const mongoose = require("mongoose");

const UserShema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    }
);

const User = mongoose.model("User", UserShema);

module.exports = User;