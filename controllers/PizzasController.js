let pizzas = require('../database/Pizzas.json');

module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas});
    },
    mostrar: (req,res) => {
        let id = req.params.id;
        let pizza = pizzas.find(p => p.id == id);
        res.render('pizza.ejs',{pizza});
    }

}