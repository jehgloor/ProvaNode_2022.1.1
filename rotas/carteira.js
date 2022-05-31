const res = require('express/lib/response')
const Carteira = require('../model/carteira')


module.exports = app => {
    app.get('/carteira', (req,res) =>{
        res.send('Você está em LOGIN via GET') 
        //retorna os dados ?
        Login.lista(res)
    } )
        
    app.get('/carteira /:id',(req, res) => {
        let id = parseInt(req.params.id)
        Despesa.buscaPorId(id, res)
    })

    app.patch('/carteira/:id',(req, res) =>{
        let id = parseInt(req.params.id)
        let valores = req.body
        Despesa.altera(id, valores, res)
     })

        


    app.post('/carteira', (req,res) => {
        if(req.body.saldo<=0){
            res.send('saldo insuficiente')
            console.log("saldo insuficiente");
        }else{
            console.log(req.body)
            Carteira.adiciona(req.body)
            res.send('Você esta em CARTEIRA via POST')
        }
        
    })
}