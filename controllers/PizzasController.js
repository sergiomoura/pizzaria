const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.send(pizzas);
    },

    show: (req, res) => {
        res.render('show.ejs', {pizzas});
    }
}