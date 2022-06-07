const conexao = require ('../database/connection')

const categoria = require ('../rotas/categoria')


class Categoria{
    adiciona(categoria){
        let sql = 'INSERT INTO categoria set?'
        conexao.query(sql,categoria,(erro,resultado)=>{
            if(erro){
                console.log(erro);
                res.status(400).json(erro);
            }else{
                //console.log(resultado);
                res.status(200).json(erro)
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

    altera(id, valores, res){
        let sql = 'UPDATE categoria SET ? WHERE id_categoria_pk = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    buscaPorId(id, res){
        let sql = 'SELECT * FROM categoria WHERE id_categoria_pk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    

   
}

module.exports = new Categoria