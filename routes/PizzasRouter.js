// Importando o express
const express = require('express');

// Criando o roteador
const router = express.Router();

// Importando o Controller que lida com as pizzas
const PizzasController = require('../controllers/PizzasController');

// Criando rota que encaminha requisição para o PizzasController.index
router.get('/', PizzasController.index)

// Criando rota que encaminha requisição para o PizzasController.index
router.get('/:id', PizzasController.show);

// Exportando o roteador
module.exports = router;