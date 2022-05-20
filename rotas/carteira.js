const res = require('express/lib/response')
const Carteira = require('../model/carteira')


module.exports = app => {
    app.get('/carteira', (req,res) => {
        Carteira.lista(res)
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