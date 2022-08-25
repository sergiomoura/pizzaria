// Importando o express
const express = require('express');

// Criando o roteador
const router = express.Router();

// Importando o Controller que lida com as pizzas
const PizzasController = require('../controllers/PizzasController.js');

// Criando rota que encaminha requisição para o PizzasController.index
router.get('/', PizzasController.index);
router.get('/:id', PizzasController.show);
router.get('/busca', PizzasController.search);

// Exportando o roteador
module.exports = router;