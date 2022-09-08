const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.send(pizzas);
    },

    show: (req, res) => {

        let {id} = req.params;
        let pizzaID = pizzas.find(pizzas => pizzas.id == id);
        
        res.render('show', {pizzaID});
    },

    addCart: (req, res) => {
        let {IdPizza} = req.body;
        res.send ("TESTE " + IdPizza);
    }
}