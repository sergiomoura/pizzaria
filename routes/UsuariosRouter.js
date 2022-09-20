const UsuariosController = require('../controllers/UsuariosController');

// Criando o meu roteador
const UsuariosRouter = require('express').Router();

// Criando as rotas...
UsuariosRouter.get('/entrar', UsuariosController.showEntrar);
UsuariosRouter.post('/add', UsuariosController.add);

// Exportando o roteador criado
module.exports = UsuariosRouter;