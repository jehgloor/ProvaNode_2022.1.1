const conexao = require('../database/connection')
const despesa = require('../rotas/despesa')


class Despesa{
    adiciona(despesa){
        
        let sql = 'INSERT INTO despesa SET?'

        conexao.query(sql,despesa,(erro,resultado) =>{
            if (erro){
                res.status(400).json(erro)
                console.log(erro);
            }else{
                res.status(200).json(erro)
                //console.log(resultado);
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM despesa'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM despesa WHERE id_despesa_pk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE despesa SET ? WHERE id_despesa_pk = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Despesa;