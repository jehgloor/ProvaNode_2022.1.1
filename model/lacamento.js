const conexao = require('../database/connection')
const lancamento = require('../rotas/lancamento')


class Lancamento{
    adiciona(lancamento){
        
        let sql = 'INSERT INTO lancamento SET?'

        conexao.query(sql,lancamento,(erro,resultado) =>{
            if (erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM Lancamento'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Lancamento;