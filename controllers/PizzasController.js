// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {

        // Verificar se a session pizzas está setada.
        // Caso esteja, levantar a quantidade de pizzas
        // Caso não esteja, quantidade = 0
        let quantidade = 0;
        if(req.session.pizzas){
            quantidade = req.session.pizzas.length;
        }

        res.render('index.ejs',{ pizzas, quantidade });
    },

    show: (req, res) => {
        // Levantar o id que veio no parâmetro de rota
        let id = req.params.id;

        // Encontrar no array de pizzas a pizza
        let pizza = pizzas.find(p=>p.id == id);

        // Retornar a view pizza.ejs, a pizza encontrada
        res.render('pizza.ejs',{pizza});
    },

    search: (req, res) => {

        let quantidade = 0;
        if(req.session.pizzas){
            quantidade = req.session.pizzas.length;
        }

        // Levantar o trecho que está sendo buscado (req.query.q)
        let termoBuscado = req.query.q;
        // Filtrar as pizzas para obter somente as pizzas com esse trecho
        let pizzasFiltradas = pizzas.filter(p => p.nome.toLowerCase().includes(termoBuscado.toLowerCase()))
        // retornar a view index.ejs, passando para ela somente as pizzas filtradas
        res.render('index.ejs', { pizzas: pizzasFiltradas, quantidade });
    },

    addCart: (req, res) => {
        
        // Verificar se existe pizza
        // caso haja, basta adicionar ao array
        // caso não haja a gente cria um array
        
        if(req.session.pizzas){
            req.session.pizzas.push(req.body.aEscolhida);
        } else {
            req.session.pizzas = [req.body.aEscolhida];
        }
        
        res.redirect('/pizzas');

        console.log(req.session);

    },

    showCart: (req, res) => {

        // Levantar do array de pizzas as pizzas que estão na session;
        // ["1" , "3"] ======> [{id:1, nome:"Pepperoni", preco:50}, {id:3, nome:"Fracatu", preco: 32}]
        let idsNoCarrinho = req.session.pizzas;
        
        let getPizzaById = (id) => {
            return pizzas.find(p => p.id == id)
        }

        let pizzasNoCarrinho = idsNoCarrinho.map(getPizzaById);

        // Renderizar pizzas.ejs, passando as pizzas que estão no carrinho, e não os ids;
        res.render("cart.ejs", {pizzasNoCarrinho});
    }

}