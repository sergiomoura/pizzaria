const express = require('express');
const PizzasController = require('../controllers/PizzasController');
const router = express.Router();

router.get('/', PizzasController.listar);

module.exports = router;