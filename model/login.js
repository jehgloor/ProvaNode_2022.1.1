const conexao = require ('../database/connection')
const login = require('../rotas/login')

class Login{
    adiciona(login){
        let sql = 'INSERT INTO login SET?'

        conexao.query(sql,login,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
    lista(res){
        const sql = 'SELECT * FROM Login'

        login.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}
module.exports = new Login