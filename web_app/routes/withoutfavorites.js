const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var profile = [], url = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT profile_id, profile_url FROM profile LEFT JOIN favorite ON profile_id=fk_profile_profile_id WHERE fk_score_anime_anime_id IS NULL LIMIT 10", (err, rows, fields)=>{
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
        url[i] = dataArray[i].profile_url
    }
    jsonArray = [profile, url];
}

module.exports = Router;