// Importa o módulo de acesso ao banco de dados para professores
const model = require('../models/professorModel.js')

// Retorna a lista de todos os professores cadastrados
const listAllProfessors = async (req, res) => {
    const professors = await model.listAllProfessors()
    res.json(professors)
}

// Retorna um professor pelo ID passado como parâmetro de rota
const searchProfessorID = async (req, res) => {
    const { id } = req.params
    const professor = await model.searchProfessorID(id)

    if (!professor) {
        return res.status(404).json({ message: 'Not Found' })
    }

    res.json(professor)
}

// Cria um novo registro de professor a partir do corpo da requisição
const createProfessor = async (req, res) => {
    const { nome, disciplina, email, salario } = req.body

    // Validação básica de campos obrigatórios
    if (!nome || !disciplina || !email || salario == null) {
        return res.status(400).json({ message: 'nome, disciplina, email and salario are required' })
    }

    const professor = { nome, disciplina, email, salario }
    const createdId = await model.createProfessor(professor)

    res.status(201).json({ message: 'Submitted', id: createdId })
}

// Atualiza os dados de um professor existente pelo ID
const updateProfessor = async (req, res) => {
    const { id } = req.params
    const { nome, disciplina, email, salario } = req.body

    const professor = { nome, disciplina, email, salario }
    await model.updateProfessor(id, professor)

    res.json({ message: 'Updated' })
}

// Exclui um professor pelo ID passado na rota
const deleteProfessor = async (req, res) => {
    const { id } = req.params

    await model.deleteProfessor(id)
    res.json({ message: 'Deleted' })
}

// Exporta as ações para o roteador usar
module.exports = { listAllProfessors, searchProfessorID, createProfessor, updateProfessor, deleteProfessor }