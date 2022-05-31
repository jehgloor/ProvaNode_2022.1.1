class Tabelas{

    iniciaConexao(conexao){
        console.log("Banco conectado com sucesso!!!");
        this.conexao=conexao;

        this.criaLogin()
        this.criaCategoria()
        this.criaCarteira()
        this.criaDespesa()
       //atribuindo a conexao
        
    }
    criaLogin(){      //Criacao de tabela Login
        let sql = 'create table IF NOT EXISTS login'+
            '(id_login_pk integer not null auto_increment PRIMARY KEY,'+
            'email varchar(100) UNIQUE not null,'+
            "senha varchar(15) DEFAULT'senha1234');" 
           


            this.conexao.query(sql, erro => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log('Tabela LOGIN criada com sucesso!')
                }

            })
    }

    criaCarteira(){  //Criacao de tabela Carteira
        let sql = 'CREATE TABLE IF NOT EXISTS carteira '+
        '(id_carteira_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR (150) NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL,'+
        'saldo double ,'+
        'limite double,'+
        'id_login_fk INT,'+
        'FOREIGN KEY (id_login_fk) REFERENCES login(id_login_pk))'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela CARTEIRA criada com sucesso!')
            }

        })
    }



    
    criaCategoria(){   //Criacao de tabela Categoria
        let sql = 'create table IF NOT EXISTS categoria'+
            '(id_categoria_pk integer not null auto_increment PRIMARY KEY,'+
            'nome varchar(150) not null,'+
            'descricao varchar(200))'
            
            this.conexao.query(sql, erro => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log('Tabela CATEGORIA criada com sucesso!')
                }
    
            })
        }

    
    criaDespesa(){   
        let sql = 'create table IF NOT EXISTS despesa'+
            '(id integer not null auto_increment PRIMARY KEY,'+
            'valor double not null,'+
            'descricao varchar(200),'+
            "tipo CHAR NOT NULL DEFAULT 'D',"+
            'data date not null,'+
            'id_categoria_fk INT ,'+
            'id_carteira_fk INT ,'+
            'FOREIGN KEY (id_categoria_fk) REFERENCES CATEGORIA(id_categoria_pk),'+
            'FOREIGN KEY (id_carteira_fk) REFERENCES CARTEIRA(id_carteira_pk))'

            
            this.conexao.query(sql, erro => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log('Tabela DESPESA criada com sucesso!')
                }
    
            })

      
    }
}
module.exports = new Tabelas




