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

        //res.send ('Aqui vou adicionar uma pizza ao carrinho...' + req.body.aEscolhida);

        req.session.pizzas ? req.session.pizzas.push(req.body.IdPizza) : req.session.pizzas = [req.body.IdPizza];

        res.redirect('/');
        console.log(req.session);
    }
}