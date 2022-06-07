const Categoria = require ('../model/categoria')

module.exports = app =>{
    app.get('/categoria', (req,res) =>{
        //res.send('Você está em LOGIN via GET') 
        //retorna os dados ?
        Categoria.lista(res)
    } )
        
    app.get('/categoria /:id',(req, res) => {
        let id = parseInt(req.params.id)
        Categoria.buscaPorId(id, res)
    })

    app.patch('/categoria/:id',(req, res) =>{
        let id = parseInt(req.params.id)
        let valores = req.body
        Categoria.altera(id, valores, res)
     })

    app.post('/categoria', (req,res) => {
        if(req.body.id_pk>15){
            res.send("Não pode ter mais de 15 Categoria")
            console.log('Não pode ter mais de 15 Categoria');
        }else{
            Categoria.adiciona(req.body)
            console.log(req.body)
            res.send('Você esta em CATEGORIA via POST')
        }
    })

    
}
