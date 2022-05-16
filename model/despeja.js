const conexao = require('../database/connection')

class Movimento{

    adiciona(movimento){
        let sql = 'INSERT INTO movimento SET ?'
        conexao.query(sql, movimento)
    }
}
module.exports = new Movimento