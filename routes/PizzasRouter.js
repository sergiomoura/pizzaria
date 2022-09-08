// Importando o express
const express = require('express');

// Criando o roteador
const router = express.Router();

// Importando o Controller que lida com as pizzas
const PizzasController = require('../controllers/PizzasController');
const pontuaPizza = require('../middlewares/pontuaPizza');


// Criando rota que encaminha requisição para o PizzasController.index
router.get('/', PizzasController.index)

// Criando rota que encaminha requisição para o PizzasController.index
router.get('/:id', pontuaPizza, PizzasController.show);

router.post('/addCart', PizzasController.addCart );


// Exportando o roteador
module.exports = router;