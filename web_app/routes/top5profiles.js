const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var profile = [], rank = [], id = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT profile_id, genre.fk_score_anime_rank AS anime_rank, genre.fk_score_anime_anime_id AS anime_id FROM (profile JOIN favorite ON profile_id=fk_profile_profile_id) JOIN genre ON favorite.fk_score_anime_anime_id=genre.fk_score_anime_anime_id WHERE genre.fk_score_anime_rank<=5 GROUP BY profile_id, genre.fk_score_anime_anime_id", (err, rows, fields)=>{
        if(!err){
            formatData(rows);
            res.send(jsonArray);
            console.log(jsonArray);
        }
        else{
            console.log(err);
        }
    })
]);

function formatData(dataArray) {
    for(var i = 0; i < dataArray.length; i++) {
        profile[i] = dataArray[i].profile_id;
        rank[i] = dataArray[i].anime_rank;
        id[i] = dataArray[i].anime_id
    }
    jsonArray = [profile, rank, id];
}

module.exports = Router;