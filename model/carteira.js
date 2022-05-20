const conexao = require('../database/connection')
const carteira = require('../rotas/carteira')
//nao sei se faz diferença usar essa variavel, ta usando o polimorfismo na linha 24 e 17 

class Carteira{
        adiciona(carteira){
            let sql =  'INSERT INTO carteira SET?' // uma string

            //funçao de callback vai ser chamada quando a função query acabar de ser executada
            let callback = (erro, resultado) =>{
                if(erro){
                    console.log(erro)
                }else{
                    console.log(resultado)
                }
            };
            conexao.query(sql,carteira,callback)
           
            // (id, descricao, saldo, limite, nome)
        }
        lista(res){
            
            const sql = 'SELECT * FROM Carteira'
            conexao.query(sql,carteira,(erro, resultado) =>{
                if (erro){
                    res.status(400).json(erro)
                }else{
                    res.status(200).json(resultado)
                }
                }) 
        }
    }
    module.exports = new Carteira

