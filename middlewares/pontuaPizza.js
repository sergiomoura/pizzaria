const pontuaPizza = (req, res, next) => {

    // Capturar o ID da pizza requerida
    let id = req.params.id;

    //Levantar a pontuacao da pizza requerida de um arquivo
    
    // - Importar as pizzas
    const pizzas = require("../database/pizzas.json")
    
    // - localizar a pizza do ID
    let pizzaEncontrada = pizzas.find(pizza => pizza.id == id);

    // - verificando a existencia da pizza
    if(!pizzaEncontrada) {return res.send('Pizza nao encontrada!');}

    // - Pegar a pontuacao dela e aumentar
    if(pizzaEncontrada.score == undefined){
        pizzaEncontrada.score = 1;
    } else {
        pizzaEncontrada.score++; // Soma mais 1 na propria variavel
    }

    //Salvar a nova pontuacao no arquivo
    const fs = require('fs');
    const path = require('path');
    let caminhoDoArquivoPizzas = path.resolve('./database/pizzas.json');
    let stringJSONPizzas = JSON.stringify(pizzas, null, 4)
    
    fs.writeFileSync(caminhoDoArquivoPizzas, stringJSONPizzas);

    //Passar para o proximo middleware
    next();
}

module.exports = pontuaPizza;
