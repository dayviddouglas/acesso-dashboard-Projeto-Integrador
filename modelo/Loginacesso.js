// importando o mongoose.
const mongoose = require('mongoose');


// Criando a camada de modelo.
const Login = mongoose.model('Login',{
    login: String,
    senha: String,
});


module.exports = Login;