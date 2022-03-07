const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")
var  id = [];

Router.get("/", (req,res)=>[
    mysqlConnection.query("SELECT anime_id FROM score_anime JOIN genre ON anime_id=fk_score_anime_anime_id WHERE genre='Drama' UNION SELECT anime_id FROM score_anime JOIN genre ON anime_id=fk_score_anime_anime_id WHERE genre='Action'", (err, rows, fields)=>{
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
        id[i] = dataArray[i].anime_id
    }
    jsonArray = [id];
}

module.exports = Router;