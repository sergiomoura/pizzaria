
var pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {

        // Verificar se a session pizza esta setada
        // Caso esteja. levantar a qtd de pizza
        //Caso nao esteja, qtd = 0
        let quantidade = 0;

        if(req.session.pizzas) {
            quantidade = req.session.pizzas.length;
        }else {

            req.session.pizzas = [req.body.pizzas];

        }

        res.render('index.ejs', {pizzas, quantidade});
    },

    search: (req, res) => {

        if(req.session.pizzas) {
            quantidade = req.session.pizzas.length;
        }else {

            req.session.pizzas = [req.body.pizzas];

        }

        //Levantar o trecho que está sendo buscado (req.query.q)
        let termoBuscado = req.query.q;

        //Filtrar as pizzas para obter somente as pizzas com esse trecho
        let pizzasFiltradas = pizzas.filter(p => p.nome.toLowerCase().includes(termoBuscado.toLowerCase()));

        //retornar a view index.ejs, passando para ela somente as pizzas filtradas
        res.render('index.ejs', {pizzas: pizzasFiltradas, quantidade});

    }

}