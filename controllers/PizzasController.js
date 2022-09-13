const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.send(pizzas);
    },

    show: (req, res) => {

        // Verificar se a session pizza esta setada
        // Caso esteja. levantar a qtd de pizza
        //Caso nao esteja, qtd = 0
        

        if(req.session.pizzas) {
            quantidade = req.session.pizzas.length;
        }else {

            req.session.pizzas = [req.body.pizzas];

        }

        let {id} = req.params;
        let pizzaID = pizzas.find(pizzas => pizzas.id == id);
        
        res.render('show', {pizzaID});
    },

    addCart: (req, res) => {

        //res.send ('Aqui vou adicionar uma pizza ao carrinho...' + req.body.pizza);

        req.session.pizzas ? req.session.pizzas.push(req.body.IdPizza) : req.session.pizzas = [req.body.IdPizza];

        res.redirect('/');
        console.log(req.session);
    },

    carrinho: (req, res) => {

        

        if(req.session.pizzas) {
            quantidade = req.session.pizzas.length;
        }else {

            req.session.pizzas = [req.body.pizzas];

        }

        // Levantar do array de pizzas qque estao na session

        // rederinzar pizzas.ejs passando as pizzas no carrinho ejs
        res.render('carrinho.ejs');
    }
}