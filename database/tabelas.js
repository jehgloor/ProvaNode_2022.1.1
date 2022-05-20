class Tabelas{

    iniciaConexao(conexao){
        console.log("Banco conectado com sucesso!!!");
        this.conexao=conexao;

        this.criaCarteira()
        this.criaCategoria()
        this.criaLogin()
        this.criaLancamento()
       //atribuindo a conexao
        
    }

    criaCarteira(){  //Criacao de tabela Carteira
        let sql = 'CREATE TABLE IF NOT EXISTS despesa '+
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'valor double NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela despesa criada con sucesso!')
            }

        })
    }



    criaCarteira(){  //Criacao de tabela Carteira
        let sql = 'create table IF NOT EXISTS carteira'+
            '(id integer not null auto_increment,'+
            'descricao varchar(200),'+
            'saldo double not null,'+
            'limite double not null,'+
            'nome varchar(50) not null,'+
            'primary key(id));'
            this.conexao.query(sql)
    }

    criaCategoria(){   //Criacao de tabela Categoria
        let sql = 'create table IF NOT EXISTS categoria'+
            '(id integer not null auto_increment,'+
            'nome varchar(50) not null,'+
            'descricao varchar(200),'+
            'primary key(id));'
            this.conexao.query(sql)
        }

    criaLogin(){      //Criacao de tabela Login
        let sql = 'create table IF NOT EXISTS login'+
            '(id integer not null auto_increment,'+
            'email varchar(50) not null,'+
            'senha varchar(15) not null,'+
            'primary key(id));'
            this.conexao.query(sql)
    }
    criaLancamento(){   
        let sql = 'create table IF NOT EXISTS lancamento'+
            '(id integer not null auto_increment,'+
            'descricao varchar(200),'+
            'valor double not null,'+
            'data date not null,'+
            'tipo integer,'+
            'id_carteira integer not null,'+
            'id_categoria integer not null,'+
            'primary key(id),'+
            'foreign key(id_carteira) references carteira(id),'+
            'foreign key(id_categoria) references categoria(id));'
            this.conexao.query(sql)

      
    }
}
module.exports = new Tabelas




