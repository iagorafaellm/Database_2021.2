const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var titulo = [], perfil = [], link = [], resenha = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT title, profile_id, review.link, overall_rating FROM (score_anime JOIN review ON anime_id=fk_score_anime_anime_id) JOIN profile ON profile_id=fk_profile_profile_id LIMIT 50", (err, rows, fields)=>{
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
        titulo[i] = dataArray[i].title;
        perfil[i] = dataArray[i].profile_id;
        link[i] = dataArray[i].link;
        resenha[i] = dataArray[i].overall_rating;
    }
    jsonArray = [titulo, perfil, link, resenha];
}

module.exports = Router;