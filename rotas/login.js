
const Login = require ('../model/login')

module.exports = app => {
    app.get('/login', (req,res) =>{
        //res.send('Você está em LOGIN via GET') 
        //retorna os dados ?
        Login.lista(res)
    } )
        
    app.get('/login /:id',(req, res) => {
        let id = parseInt(req.params.id)
        Login.buscaPorId(id, res)
    })

    app.patch('/login/:id',(req, res) =>{
        let id = parseInt(req.params.id)
        let valores = req.body
        Login.altera(id, valores, res)
     })

     app.post('/login', (req,res) => {
        if(req.body.senha>=0){
            console.log('A senha deve conter'+ 
                'números e letras ou somente letras');
            res.send('A senha deve conter números'+
                'e letras ou somente letras')
        }else{
            Login.adiciona(req.body,res)
            // console.log(req.body)
            // res.send('Você esta em LOGIN via POST')
        }
    })
}
