class Tabelas{
    // construtor
    iniciaConexao(conexao){
        console.log("Banco conectado com sucesso!!!");
        //pra criação da Tabelas
        this.conexao=conexao;
    }

    criaCarteira(){     //Criacao de tabela Carteira
        sql = 'create table carteira'+
            '(id integer not null auto_increment,'+
            'descricao varchar(200),'+
            'saldo double not null,'+
            'limite double not null,'+
            'nome varchar(50) not null,'+
            'primary key(id));'

            this.conexao.query(sql)

        // curl -d "tabela=Carteira&id_pk=1&descricao=uso do banco Nubank&saldo=2000&limite=3000&nome=Nubank" 
        //curl -d "id_pk=2&descricao=uso do banco Itaú&saldo=5000&limite=8000&nome=Itaú"
        //curl -d "id_pk=3&descricao=uso do banco Santander&saldo=800&limite=1600&nome=Santander" http://localhost:3000/carteira
    }

    criaCategoria(){       //Criacao de tabela Categoria
        sql = 'create table categoria'+
            '(id integer not null auto_increment,'+
            'nome varchar(50) not null,'+
            'descricao varchar(200),'+
            'primary key(id));'

            this.conexao.queri(sql)

        //chamar no Prompt

         //curl -d "Tabela=Categoria&id_pk=1&nome=Combustivel&descricao=posto de combustivel" 
         //curl -d "id_pk=2&nome=Eletrodomesticos&descricao=designado para compra de eletrodomesticos" 
         //curl -d "id_pk=3&nome=Aluguel&descricao=Pagar todo dia 5" 
         //http://localhost:3000/categoria
         
         
         
         
        }

    criaLogin(){        //Criacao de tabela Login
        sql = 'create table login'+
            '(id integer not null auto_increment,'+
            'email varchar(50) not null,'+
            'senha varchar(15) not null,'+
            'primary key(id));'

            this.conexao.query(sql)

        // curl -d "tabela=Login&id_pk=1&email=jefinha@hotmail.com&senha=1234"
        // curl -d "id_pk=2&email=mario@hotmail.com&senha=54321"
        //curl -d "id_pk=3&email=tomazito@hotmail.com&senha=963258" http://localhost:3000/login

    }

    criaLancamento(){   //Criacao de tabela Lancamento
        sql = 'create table lancamento'+
            '(id integer not null auto_increment,'+
            'descricao varchar(200),'+
            'valor double not null,'+
            'dataL date not null,'+
            'tipo integer,'+
            'id_carteira integer not null,'+
            'id_categoria integer not null,'+
            'primary key(id),'+
            'foreign key(id_carteira) references carteira (id),'+
            'foreign key(id_categoria) references categoria (id));'
    
            this.conexao.query(sql)

        //curl -d "tabela=Lancamento&id_pk=1&descricao=gasolina no posto do seu Zé&valor=120.00&data=2022-04-25&tipo=1&carteira_fk=1&categoria_fk=1" 
        //curl -d "id_pk=2&descricao=Compramos um Tv 4K&valor=4000.00&data=2022-04-28&tipo=1&carteira_fk=2&categoria_fk=2" 
        //curl -d "id_pk=3&descricao=gasolina no posto do Cincao&valor=120.00&data=2022-04-29&tipo=1&carteira_fk=3&categoria_fk=1" " 
        //curl -d "id_pk=4&descricao=Aluguel de Abril&valor=600.00&data=2022-04-30&tipo=1&carteira_fk=2&categoria_fk=3" 

    // http://localhost:3000/lancamento
    }
}

module.exports = new Tabelas




