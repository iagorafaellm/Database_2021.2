const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var genero = [], contagem = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT gender, count(*) AS count FROM profile GROUP BY gender", (err, rows, fields)=>{
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
        genero[i] = dataArray[i].gender;
        contagem[i] = dataArray[i].count;
    }
    jsonArray = [genero, contagem];
}

module.exports = Router;