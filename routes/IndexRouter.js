// Importando o express
const express = require('express');

// Criando o roteador
const router = express.Router();

// Importando o Controller que lida com as pizzas
const IndexController = require('../controllers/IndexController');

// Criando rota que encaminha requisição para o IndexController.index
router.get('/', IndexController.index)

// Criando rota que encaminha requisição para o IndexController.index
router.get('/busca', IndexController.search)


// Exportando o roteador
module.exports = router;