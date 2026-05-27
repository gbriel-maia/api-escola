// Importa o módulo Router do Express para criar rotas modulares
const express = require('express')
const router = express.Router()

// Importa o controlador que implementa as ações da API de professores
const profController = require('../controllers/professorController')

// Rota para listar todos os professores
router.get('/', profController.listAllProfessors)

// Rota para buscar um professor pelo ID
router.get('/:id', profController.searchProfessorID)

// Rota para criar um novo professor
router.post('/', profController.createProfessor)

// Rota para atualizar um professor existente
router.put('/:id', profController.updateProfessor)

// Rota para excluir um professor pelo ID
router.delete('/:id', profController.deleteProfessor)

// Exporta o roteador para uso em src/app.js
module.exports = router
