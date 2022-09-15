const UsuariosController = {

    showEntrar: (req, res) => {
        // res.send("Página de entrar...");
        res.render("entrar.ejs");
    }

}

module.exports = UsuariosController;