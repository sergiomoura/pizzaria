let pizzas = require('../database/Pizzas.json');

module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas});
    },
    mostrar: (req,res) => {
        let id = req.params.id;
        let pizza = pizzas.find(p => p.id == id);
        res.render('pizza.ejs',{pizza});
    },
    buscar: (req, res) => {
        let trechoBuscado = req.query.q;
        if(trechoBuscado == ''){
            res.redirect('/');
        } else {
            let resultado = pizzas.filter(p=>p.nome.toUpperCase().includes(trechoBuscado.toUpperCase()))
            res.render('pizzas.ejs',{pizzas: resultado, busca: trechoBuscado});
        }

    }

}