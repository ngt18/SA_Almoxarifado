const mysql = require('mysql2');

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'almoxarifado',  
});

db.connect((error) =>{
    if (error) {
        console.log("Erro ao conectar: ", error);
        return;
    }
    console.log("Banco de dados conectado com sucesso!")
})

module.exports = db;