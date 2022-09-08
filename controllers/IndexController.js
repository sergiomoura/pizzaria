
var pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.render('index.ejs', {pizzas});
    },

    search: (req, res) => {

        //Levantar o trecho que está sendo buscado (req.query.q)
        let termoBuscado = req.query.q;

        //Filtrar as pizzas para obter somente as pizzas com esse trecho
        let pizzasFiltradas = pizzas.filter(p => p.nome.toLowerCase().includes(termoBuscado.toLowerCase()));


        //retornar a view index.ejs, passando para ela somente as pizzas filtradas
        res.render('index.ejs', {pizzas: pizzasFiltradas});

    }

}