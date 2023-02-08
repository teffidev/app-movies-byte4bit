require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/indexRoutes");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./config/mongoConfig");

app.use(cors());

app.use("/api", router);

app.set('view engine', 'ejs');
app.set('views', __dirname + './views');

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(port, () => {
    console.log(`My app is running on http://localhost:${port}`);
});

db();