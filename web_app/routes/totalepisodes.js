const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var count = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT sum(episodes) AS sum FROM score_anime", (err, rows, fields)=>{
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
        count[i] = dataArray[i].sum;
    }
    jsonArray = [count];
}

module.exports = Router;