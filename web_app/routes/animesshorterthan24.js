const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var titulo = [], episodios = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT title, episodes FROM score_anime WHERE episodes <= (SELECT episodes FROM score_anime WHERE title='Steins;Gate') LIMIT 100", (err, rows, fields)=>{
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
        episodios[i] = dataArray[i].episodes;
    }
    jsonArray = [titulo, episodios];
}

module.exports = Router;