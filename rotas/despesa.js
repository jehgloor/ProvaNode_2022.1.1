
const Despesa = require('../model/despesa')


module.exports = app => {
    app.get('/despesa', (req,res) =>{
        res.send('Você está em LOGIN via GET') 
        //retorna os dados ?
        Login.lista(res)
    } )
        
    app.get('/despesa /:id',(req, res) => {
        let id = parseInt(req.params.id)
        Despesa.buscaPorId(id, res)
    })

    app.patch('/despesa/:id',(req, res) =>{
        let id = parseInt(req.params.id)
        let valores = req.body
        Despesa.altera(id, valores, res)
     })

       

    app.post('/despesa', (req,res) => {
        
        if(req.body.valor>2500){
            console.log('valor muito alto de compra, ECONOMIZE');
            res.send('valor muito alto de compra, ECONOMIZE')
        }else{
            Despesa.adiciona(req.body)
            console.log(req.body)
            res.send('Você esta em DESPESA via POST')
        }
    })
}

