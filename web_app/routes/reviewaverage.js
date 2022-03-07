const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var id = [], average = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT fk_score_anime_anime_id AS anime_id, avg(avg_score) AS avg_score FROM review GROUP BY fk_score_anime_anime_id", (err, rows, fields)=>{
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
        id[i] = dataArray[i].anime_id;
        average[i] = dataArray[i].avg_score
    }
    jsonArray = [id, average];
}

module.exports = Router;