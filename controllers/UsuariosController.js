const bcrypt = require('bcrypt');

const UsuariosController = {

    showEntrar: (req, res) => {
        
        let erroNoCadastro = (req.query.erroNoCadastro == 1);

        res.render("entrar.ejs", {erroNoCadastro});
    },

    add: (req, res) => {

        // Extraindo informações do req.body
        let {email, senha, confirmacao, endereco} = req.body;

        // Verificar se a senha e confirmação estão ok
        if(senha != confirmacao){
            return res.redirect('/usuarios/entrar?erroNoCadastro=1');
        }

        // Criar um objeto com as informações do usuário
        let usuario = {
            email,
            senha: bcrypt.hashSync(senha, 10),
            enderecos:[endereco]
        }

        // Salvar o usuário no arquivo usuarios.json
        const fs = require('fs');
        const path = require('path');
        const usuarios = require('../database/usuarios.json');
        usuarios.push(usuario);
        fs.writeFileSync(
            path.join(__dirname, '../database/usuarios.json'),
            JSON.stringify(usuarios, null, 4)
        )

        // Criar uma session com as informações NÃO SENSÍVEIS do usuário
        delete usuario.senha; // Removendo a senha do usuario antes de salvar na session
        req.session.usuario = usuario;
        
        // Redirecionar o usuário...
        if(req.session.pizzas != undefined){

            // Caso ele tenha carrinho -> /pizzas/cart
            return res.redirect('/pizzas/cart');

        } else {
            
            // Caso contrário -> /pizzas 
            return res.redirect('/pizzas');
        
        }

    }

}

module.exports = UsuariosController;