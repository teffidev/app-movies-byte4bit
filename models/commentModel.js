const mongoose = require("mongoose");

const CommentShema = new mongoose.Schema(
    {
        text: String
    }
);

const Comment = mongoose.model("Comment", CommentShema);

module.exports = Comment;