const conexao = require ('../database/connection')

const categoria = require ('../rotas/categoria')


class Categoria{
    adiciona(categoria){
        let sql = 'INSERT INTO categoria set?'
        conexao.query(sql,categoria,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
    lista(res){
        const sql = 'SELECT * FROM categoria'
        conexao.query(sql,categoria,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Categoria