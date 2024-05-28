const mongoose = require('mongoose');

const express = require('express');



require('dotenv').config();

const app = express();


app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(
    express.json()
)

// Rota de Comfirmação 
app.get('/', (req, res)=>{
    res.json({
        messagem: "Projeto Iot-4º periodo..."
    })
})

// Configurando o cors.
const cors = require ('cors')

const configCors = {
    origin:'*',
}

app.use(cors(configCors));

// Conectando com o Banco de Dados
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;


mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@apiclster.wyusev1.mongodb.net/projeto_iot?retryWrites=true&w=majority`).then(
    console.info("Seja Bem Vindo ao Projeto Iot! Entre neste endereço: http://localhost:4000"),
    // Configurando a porta.
    app.listen(process.env.PORT ||4000)
).catch((err)=>{
    console.log(err)
})


// rotas da Api
const loginRotas = require('./rotas/Loginrotas');
app.use('/login', loginRotas)