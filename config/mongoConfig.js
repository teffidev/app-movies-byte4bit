const mongoose = require("mongoose");

const db = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log(">>>SUCCESFUL CONNECTION!<<<");
        }else{
            console.log(">>>CONNECTION ERROR!<<<");
        };
    });
};

module.exports = db;