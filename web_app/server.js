const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const Top10Routes = require("./routes/top10");
const WithoutFavoriteRoutes = require("./routes/withoutfavorites")

var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use("/top10", Top10Routes);
app.use("/withoutfavorites", WithoutFavoriteRoutes);

app.listen(3000)