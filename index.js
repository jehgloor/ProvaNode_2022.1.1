
const utilizandoExpress = require('./configuracao/customizarExpress.js') 

const conexao = require('./database/connection')
const tabelas = require('./database/tabelas')

conexao.connect(erro =>{

    if(erro){
        console.log('Erro na conexão com o banco'+erro)
    }else{

        console.log("conectado ao banco com sucesso");
        tabelas.iniciaConexao(conexao)

        const app = utilizandoExpress();
        app.listen(3000, () => console.log('Servidor ativo na porta 3000'))

    }
})

//instalado o express, nodemon , consign , body-parser , mysql

// CRIAR NO PROMPT 
    //CARTEIRA
            // curl -d "tabela=Carteira&id_pk=1&descricao=uso do banco Nubank&saldo=2000&limite=3000&nome=Nubank" http://localhost:3000/carteira
            // curl -d "id_pk=2&descricao=uso do banco Itaú&saldo=5000&limite=8000&nome=Itau" http://localhost:3000/carteira
            // curl -d "id_pk=3&descricao=uso do banco Santander&saldo=800&limite=1600&nome=Santander" http://localhost:3000/carteira
        
        // CADASTRO EM UMA LINHA
            // curl -d "tabela=Carteira&id_pk=1&descricao=uso do banco Nubank&saldo=2000&limite=3000&nome=Nubank&id_pk=2&descricao=uso do banco Itau&saldo=5000&limite=8000&nome=Itau&id_pk=3&descricao=uso do banco Santander&saldo=800&limite=1600&nome=Santander" http://localhost:3000/carteira


        // PARA TESTE DE ERRO
            //curl -d "id_pk=2&descricao=uso do banco Itaú&saldo=-400&limite=8000&nome=Itau" http://localhost:3000/carteira
            

    //CATEGORIA (copiar uma linha inteira )
            // curl -d "Tabela=Categoria&id_pk=1&nome=Combustivel&descricao=posto de combustivel" http://localhost:3000/categoria
            // curl -d "id_pk=2&nome=Eletrodomesticos&descricao=designado para compra de eletrodomesticos" http://localhost:3000/categoria
            // curl -d "id_pk=3&nome=Aluguel&descricao=Pagar todo dia 5" http://localhost:3000/categoria

        // CADASTRO EM UMA LINHA
            // curl -d "Tabela=Categoria&id_pk=1&nome=Combustivel&descricao=posto de combustivel&id_pk=2&nome=Eletrodomesticos&descricao=designado para compra de eletrodomesticos&id_pk=3&nome=Aluguel&descricao=Pagar todo dia 5" http://localhost:3000/categoria
        

        // PARA TESTE DE ERRO
            // curl -d "id_pk=16&nome=Eletrodomesticos&descricao=Pagar todo dia 5" http://localhost:3000/categoria

            
    //LOGIN
            // curl -d "tabela=Login&id_pk=1&email=jefinha@hotmail.com&senha=123dsf4" http://localhost:3000/login
            // curl -d "id_pk=2&email=mario@hotmail.com&senha=as54321" http://localhost:3000/login
            // curl -d "id_pk=3&email=tomazito@hotmail.com&senha=96sad3258" http://localhost:3000/login


        // CADASTRO EM UMA LINHA 
            // curl -d "tabela=Login&id_pk=1&email=jefinha@hotmail.com&senha=1dsf234&id_pk=2&email=mario@hotmail.com&senha=a543ds21&id_pk=3&email=tomazito@hotmail.com&senha=9ds63258" http://localhost:3000/login

        // PARA TESTE DE ERRO
            // curl -d "id_pk=3&email=tomazito@hotmail.com&senha=123456" http://localhost:3000/login
            


    //LANCAMENTO
            // curl -d "tabela=Lancamento&id_pk=1&descricao=gasolina no posto do seu Zé&valor=120.00&data=2022-04-25&tipo=1&carteira_fk=1&categoria_fk=1" http://localhost:3000/lancamento
            // curl -d "id_pk=3&descricao=gasolina no posto do Cincao&valor=160.00&data=2022-04-29&tipo=1&carteira_fk=3&categoria_fk=1" http://localhost:3000/lancamento 
            // curl -d "id_pk=4&descricao=Aluguel de Abril&valor=600.00&data=2022-04-30&tipo=1&carteira_fk=2&categoria_fk=3" http://localhost:3000/lancamento

        // CADASTRO EM UMA LINHA
            // curl -d "tabela=Lancamento&id_pk=1&descricao=gasolina no posto do seu Zé&valor=120.00&data=2022-04-25&tipo=1&carteira_fk=1&categoria_fk=1&id_pk=2&descricao=Compramos um Tv 4K&valor=4000.00&data=2022-04-28&tipo=1&carteira_fk=2&categoria_fk=2&id_pk=3&descricao=gasolina no posto do Cincao&valor=120.00&data=2022-04-29&tipo=1&carteira_fk=3&categoria_fk=1&id_pk=4&descricao=Aluguel de Abril&valor=600.00&data=2022-04-30&tipo=1&carteira_fk=2&categoria_fk=3"  http://localhost:3000/lancamento

        // PARA TESTE DE ERRO
        // curl -d "id_pk=2&descricao=Compramos um Tv 4K&valor=4000.00&data=2022-04-28&tipo=1&carteira_fk=2&categoria_fk=2" http://localhost:3000/lancamento