// Importando o express 
const express = require('express');

// Criando a aplicação express
const app = express();

// Setando o motor de visualizacao como extensao EJS
app.set("view engine", 'ejs');

// Informa ao Express qual a rota statica da pasta pública
app.use(express.static("public"));

// Importando o roteador que lida com as rotas de index
const IndexRouter = require('./routes/IndexRouter')

// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem para endereços que comecem com /
app.use('/', IndexRouter);

// Importando o roteador que lida com as rotas de pizza
const PizzasRouter = require('./routes/PizzasRouter')

// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem para endereços que comecem com /pizzas
app.use('/pizzas', PizzasRouter);

// Subindo a aplicação para rodar escutando na porta 3000
app.listen(3000, ()=>{console.log("servidor rodando na porta 3000")});

