// Importa a conexão com o banco de dados.
const db = require("../config/database");

// Define a classe responsável pelas operações da tabela disciplina.
class DisciplinaModel {

    // Lista todas as disciplinas com o nome do professor relacionado.
    static async listar() {

        // Executa a consulta SQL com join entre disciplina e professor.
        const [rows] = await db.execute(`

            SELECT
                disciplina.id,
                disciplina.nome,
                disciplina.carga_horaria,
                professor.nome AS professor

            FROM disciplina

            INNER JOIN professor
            ON professor.id = disciplina.professor_id

        `);

        // Retorna os registros encontrados.
        return rows;
    }

    // Busca uma disciplina pelo ID informado.
    static async buscarPorId(id) {
        // Executa a consulta SQL usando o parâmetro ID.
        const [result] = await db.execute(`SELECT * FROM disciplina WHERE id=?`, [id]);

        // Retorna o primeiro registro encontrado.
        return result[0];
    }

    // Cria uma nova disciplina no banco de dados.
    static async criar(
        nome,
        carga_horaria,
        professor_id
    ) {

        // Insere os dados na tabela disciplina.
        const [result] = await db.execute(

            `INSERT INTO disciplina
            (nome,carga_horaria,professor_id)
            VALUES (?,?,?)`,

            [nome, carga_horaria, professor_id]
        );

        // Retorna o resultado da inserção.
        return result;
    }

    // Atualiza os dados de uma disciplina existente.
    static async atualizar(id, nome, carga_horaria, professor_id) {
        // Executa o update com os novos valores e o ID da disciplina.
        const [result] = await db.execute(`UPDATE disciplina SET nome = ?, carga_horaria = ?, professor_id = ? WHERE id = ?`, [nome, carga_horaria, professor_id, id]);

        // Retorna o resultado da atualização.
        return result;
    }

    // Exclui uma disciplina pelo ID informado.
    static async excluir(id) {

        // Remove o registro da tabela disciplina.
        const [result] = await db.execute(
            `DELETE FROM disciplina WHERE id=?`,
            [id]
        );

        // Retorna o resultado da exclusão.
        return result;
    }
}

// Exporta a classe do model.
module.exports = DisciplinaModel;