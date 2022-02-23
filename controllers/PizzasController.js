let pizzas = require('../database/Pizzas.json');

module.exports = {
    listar: (req,res) => {
        res.render('pizzas.ejs', {pizzas, busca:''});
    },
    mostrar: (req,res) => {

        // Declarando variáveis que vão guardar o id da próxima pizza
        // e o id da pizza anterior.
        let idProxima;
        let idAnterior;

        // Capture o id da pizza a partir da URL na variável id
        let id = req.params.id;

        // Determinando a posição da pizza que tem esse id
        let posicao = pizzas.findIndex(p => p.id == id);

        // Guardando a pizza da posição na variável pizza
        let pizza = pizzas[posicao];

        // Se a posição da pizza encontrada for a última do array idProxima
        // deve receber o id da primeira pizza. Caso contrário, idProxima
        // deve ter o id da pizza da posição seguinte 
        if(posicao == pizzas.length - 1){
            idProxima = pizzas[0].id
        } else {
            idProxima = pizzas[posicao + 1].id;
        }
        
        // Se a posição da pizza encontrada for a primeira do array, o idAnterior
        // deve receber o id da última pizza. Caso controário, idAnterior
        // deve receber o id da pizza na posição anterior.
        if(posicao == 0){
            idAnterior = pizzas[pizzas.length - 1].id;
        } else {
            idAnterior = pizzas[posicao - 1].id;
        }
        
        // Rederizando a view passando para ela a pizza, idAnterior e idProxima
        res.render('pizza.ejs',{pizza, idAnterior, idProxima});
        
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