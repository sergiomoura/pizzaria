let pizzas = require('../database/Pizzas.json');

module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas});
    }
}