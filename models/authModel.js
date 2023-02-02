const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    } 
);

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;