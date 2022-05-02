
module.exports = app => {
    app.get('/carteira', (req,res) => res.send('Você está em CARTEIRA via GET') )
    app.post('/carteira', (req,res) => {
      
        if(req.body.saldo<=0){
            res.send('saldo insuficiente')
            console.log("saldo insuficiente");
        }else{
            res.send('Você esta em CARTEIRA via POST')
            console.log(req.body)
        }
        
    })
}
