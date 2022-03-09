const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const Top10Routes = require("./routes/top10");
const WithoutFavoriteRoutes = require("./routes/withoutfavorites");
const SeinenAnimeRoutes = require("./routes/seinenanime");
const ReviewsRoutes = require("./routes/reviews");
const Shounen1996Routes = require("./routes/shounen1996");
const DramaOrActionAnimeRoutes = require("./routes/dramaoractionanime");
const GenderCountRoutes = require("./routes/gendercount");
const ReviewAverageRoutes = require("./routes/reviewaverage");
const TotalEpisodesRoutes = require("./routes/totalepisodes.js");
const AnimesShorterThan24Routes = require("./routes/animesshorterthan24.js");

var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use("/top10", Top10Routes);
app.use("/withoutfavorites", WithoutFavoriteRoutes);
app.use("/seinenanime", SeinenAnimeRoutes);
app.use("/reviews", ReviewsRoutes);
app.use("/shounen1996", Shounen1996Routes);
app.use("/dramaoractionanime", DramaOrActionAnimeRoutes);
app.use("/gendercount", GenderCountRoutes);
app.use("/reviewaverage", ReviewAverageRoutes);
app.use("/totalepisodes", TotalEpisodesRoutes);
app.use("/animesshorterthan24", AnimesShorterThan24Routes);

app.listen(3000);