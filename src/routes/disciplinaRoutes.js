// Importa o framework Express para definir as rotas da API.
const express = require("express");

// Cria um roteador específico para as rotas de disciplina.
const router = express.Router();

// Importa o controlador de disciplina.
const DisciplinaController =
require("../controllers/disciplinaController");

// Define a rota para listar todas as disciplinas.
router.get(
    "/",
    DisciplinaController.listar
);

// Define a rota para buscar uma disciplina pelo ID.
router.get("/:id", DisciplinaController.buscarPorId);

// Define a rota para criar uma nova disciplina.
router.post(
    "/",
    DisciplinaController.criar
);

// Define a rota para atualizar uma disciplina existente.
router.put("/:id", DisciplinaController.atualizar);

// Define a rota para excluir uma disciplina.
router.delete(
    "/:id",
    DisciplinaController.excluir
);

// Exporta o roteador para a aplicação principal.
module.exports = router;