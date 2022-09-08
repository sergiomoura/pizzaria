// Importando o express 
const express = require('express');
const session = require('express-session');


// Criando a aplicação express
const app = express();

// Setando o motor de visualizacao como extensao EJS
app.set("view engine", 'ejs');

//session, Seta um cookies para o usuário ao retornar as informacoes
app.use(
    session({
        secret: 'secret-key',
        resave: false,
        saveUninitialized: true,
        //cookie: { secure: true }
  })
)

// Informa ao Express qual a rota statica da pasta pública
app.use(express.static("public"));

// Processa os formulários do tipo POST e organiza as info no req.body
app.use(express.urlencoded({ extended: false }));


// Importando o roteador que lida com as rotas de index
const IndexRouter = require('./routes/IndexRouter')
const RegistraHoraDeAcesso = require('./middlewares/RegistraHoraDeAcesso');
// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem para endereços que comecem com /
app.use('/', RegistraHoraDeAcesso, IndexRouter);

// Importando o roteador que lida com as rotas de pizza
const PizzasRouter = require('./routes/PizzasRouter')
// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem para endereços que comecem com /pizzas
app.use('/pizzas', PizzasRouter);

// Subindo a aplicação para rodar escutando na porta 3000
app.listen(3000, ()=>{console.log("servidor rodando na porta 3000")});

