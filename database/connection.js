const mysql = require('mysql'); // chamando um arquivo js 

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"aulanode"
})
// é pra torna visivel essa conexao quando chamar 
//a variavel conexao
module.exports = conexao