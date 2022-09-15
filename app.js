// Importando o express
const express = require('express');
const session = require('express-session');

const RegistraHoraDeAcesso = require('./middlewares/RegistraHoraDeAcesso');

// Criando a aplicação express
const app = express();

// Configurando a aplicação express para usar o EJS
// como template engine
app.set('view engine','ejs');

//# Para configurar a pasta views em outro lugar que não
//# seja o padrão
// app.set('views',"caminho para pasta views")

// DEFINIÇÃO DO MIDDLEWARE QUE CONFIGURA O COOKIE DA SESSION
app.use(
    session({
        secret: 'CHAVE-SECRETA',
        resave: false,
        saveUninitialized: true
    })
);

// Verificando se a requisição é para um arquivo da pasta public
// caso seja, mande esse arquivo
app.use(express.static("public"));

// Processa os formulários do tipo pos e organiza as info no req.body
app.use(express.urlencoded({ extended: false }));

// Declaração de middlewares globais
app.use(RegistraHoraDeAcesso);

// Importando o roteador que lida com as rotas de pizza
const PizzasRouter = require('./routes/PizzasRouter');
const UsuariosRouter = require('./routes/UsuariosRouter');

// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem para endereços que comecem com /pizzas
app.use('/pizzas', PizzasRouter);
app.use('/usuarios', UsuariosRouter);

// Adicionando uma rota na aplicação que responde para usuário diretamente... (isso não é MVC, mas funciona)
app.get('/', (req,res) => {res.send("Olá, visitante")})

// Pondo a aplicação para rodar escutando na porta 3000
app.listen(3000, ()=>{console.log("servidor rodando na porta 3000")});

