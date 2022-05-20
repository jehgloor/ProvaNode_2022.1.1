const Categoria = require ('../model/categoria')

module.exports = app =>{
    app.get('/categoria', (req,res) => {
        Categoria.lista(res)
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
