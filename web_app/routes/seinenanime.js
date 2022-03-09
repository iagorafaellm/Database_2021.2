const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var rank = [], id = [], titulo = [], nota = [], imagem = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT ranked, anime_id, title, rating, img_url FROM score_anime JOIN genre ON anime_id=fk_score_anime_anime_id WHERE genre='Seinen'", (err, rows, fields)=>{
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
        rank[i] = dataArray[i].ranked;
        id[i] = dataArray[i].anime_id;
        titulo[i] = dataArray[i].title;
        nota[i] = dataArray[i].rating;
        imagem[i] = dataArray[i].img_url
    }
    jsonArray = [rank, id, titulo, nota, imagem];
}

module.exports = Router;