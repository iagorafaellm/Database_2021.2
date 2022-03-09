const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var id = [], genero = [], nascimento = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT profile_id, gender, birthday FROM Profile JOIN Favorite ON profile_id=fk_Profile_profile_id JOIN Genre ON Favorite.fk_Score_Anime_anime_id=Genre.fk_Score_Anime_anime_id WHERE genre = 'Shounen' AND birthday LIKE '%1996' GROUP BY profile_id", (err, rows, fields)=>{
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
        id[i] = dataArray[i].profile_id;
        genero[i] = dataArray[i].gender;
        nascimento[i] = dataArray[i].birthday;
    }
    jsonArray = [id, genero, nascimento];
}

module.exports = Router;