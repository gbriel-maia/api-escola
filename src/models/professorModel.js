// Importa a conexão com o banco de dados MySQL a partir do pool configurado
const poll = require('../config/db')

// Busca todos os professores na tabela 'professores'
const listAllProfessors = async () => {
    const [rows] = await poll.execute('select * from professores')
    return rows
}

// Busca um único professor pelo ID e retorna o primeiro resultado
const searchProfessorID = async (id) => {
    const [rows] = await poll.execute('select * from professores where id = ?', [id])
    return rows[0]
}

// Insere um novo professor no banco de dados e retorna o ID gerado
const createProfessor = async (professor) => {
    const { nome, disciplina, email, salario } = professor
    const [result] = await poll.execute(
        'insert into professores (nome, disciplina, email, salario) values (?, ?, ?, ?)',
        [nome, disciplina, email, salario]
    )

    return result.insertId
}

// Atualiza os dados de um professor existente pelo ID
const updateProfessor = async (id, professor) => {
    const { nome, disciplina, email, salario } = professor

    await poll.execute(
        'update professores set nome = ?, disciplina = ?, email = ?, salario = ? where id = ?',
        [nome, disciplina, email, salario, id]
    )
}

// Remove um professor da tabela pelo ID fornecido
const deleteProfessor = async (id) => {
    const sql = 'delete from professores where id = ?'
    await poll.execute(sql, [id])
}

// Exporta as funções do modelo para serem usadas pelo controlador
module.exports = { listAllProfessors, searchProfessorID, createProfessor, updateProfessor, deleteProfessor }