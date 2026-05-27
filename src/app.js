// Importa o framework Express para criar a API
const express = require('express')

// Importa o conjunto de rotas relacionadas aos professores
const professorRouter = require('./routes/professorRouter')

// Cria a aplicação Express
const app = express()

// Permite que o Express faça o parse de requisições JSON no corpo
app.use(express.json())

// Monta o roteador de professores em /professores
app.use('/professores', professorRouter)

// Exporta a aplicação para ser iniciada em server.js
module.exports = app