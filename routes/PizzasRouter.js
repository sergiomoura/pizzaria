// Importando o express
const express = require('express');

// Criando o roteador
const router = express.Router();

// Importando o Controller que lida com as pizzas
const PizzasController = require('../controllers/PizzasController');

// Criando rota que encaminha requisição para o PizzasController.index
router.get('/', PizzasController.index)

// Exportando o roteador
module.exports = router;