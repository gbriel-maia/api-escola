// Importa o framework Express para criar as rotas da API.
const express = require("express");

// Cria um roteador dedicado para as rotas de professor.
const router = express.Router();

// Importa o controlador que trata as operações de professor.
const ProfessorController =
require("../controllers/professorController");

// Define a rota para listar todos os professores.
router.get(
    "/",
    ProfessorController.listar
);

// Define a rota para buscar um professor pelo ID.
router.get(
    "/:id",
    ProfessorController.buscarPorId
);

// Define a rota para criar um novo professor.
router.post(
    "/",
    ProfessorController.criar
);

// Define a rota para atualizar os dados de um professor.
router.put(
    "/:id",
    ProfessorController.atualizar
);

// Define a rota para excluir um professor.
router.delete(
    "/:id",
    ProfessorController.excluir
);

// Exporta o roteador para ser usado pela aplicação principal.
module.exports = router;