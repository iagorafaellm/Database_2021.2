const mysql = require("mysql2");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CeraVe#35100",
    database: "maldb",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Conectado com sucesso!");
    }
    else{
        console.log("Erro ao conectar!" + err);
    }
})

module.exports = mysqlConnection;