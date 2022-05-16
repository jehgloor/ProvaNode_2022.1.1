const mysql = require('mysql'); // chamando um arquivo js 

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"aulanode"
})
module.exports = conexao

