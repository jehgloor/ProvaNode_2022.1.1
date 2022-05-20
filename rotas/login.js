const Login = require ('../model/login')

module.exports = app => {
    app.get('/login', (req,res) =>{
        res.send('Você está em LOGIN via GET') 
        Login.lista(res)
    } )
        
    
    app.post('/login', (req,res) => {
        if(req.body.senha>=0){
            console.log('A senha deve conter'+ 
                'números e letras ou somente letras');
            res.send('A senha deve conter números'+
                'e letras ou somente letras')
        }else{
            Login.adiciona(req.body)
            console.log(req.body)
            res.send('Você esta em LOGIN via POST')
        }
    })
}
