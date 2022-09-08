const fs = require('fs');
const path = require('path');


function RegistraHoraDeAcesso (req, res, next){

    var dataHora = new Date();
    var strDataHora = dataHora.toISOString().substring(0,19).replace('T',' ')

    
    const acessos = path.resolve(`./logs/${strDataHora.substring(0,10)}-acessos.txt`);
    fs.appendFileSync(acessos, `${strDataHora} - ${req.url} \n`);


    next();

}


module.exports = RegistraHoraDeAcesso;