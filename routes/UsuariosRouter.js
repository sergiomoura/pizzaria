const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRouter = require('express').Router();

UsuariosRouter.get('/entrar', UsuariosController.showEntrar);

module.exports = UsuariosRouter;