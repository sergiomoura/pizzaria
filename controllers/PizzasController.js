// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.render('index.ejs',{pizzas});
    },

    show: (req, res) => {
        // Levantar o id que veio no parâmetro de rota
        let id = req.params.id;

        // Encontrar no array de pizzas a pizza
        let pizza = pizzas.find(p=>p.id == id);

        // Retornar a view pizza.ejs, a pizza encontrada
        res.render('pizza.ejs',{pizza});
    },

    search: () => {

    }

}