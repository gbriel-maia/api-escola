// Importa a conexão com o banco de dados
const db = require("../config/database");

// Cria a classe responsável pelas operações da tabela professor
class ProfessorModel {

    // Método para listar todos os professores
    static async listar() {

        // Executa o comando SQL
        const [rows] = await db.execute(
            "SELECT * FROM professor"
        );

        // Retorna os registros encontrados
        return rows;
    }

    // Método para buscar um professor pelo ID
    static async buscarPorId(id) {

        // Executa a consulta utilizando parâmetro
        const [rows] = await db.execute(
            "SELECT * FROM professor WHERE id = ?",
            [id]
        );

        // Retorna apenas o primeiro registro encontrado
        return rows[0];
    }

    // Método para inserir professor
    static async criar(nome, email) {

        // Executa o INSERT
        const [resultado] = await db.execute(

            // Comando SQL
            "INSERT INTO professor (nome, email) VALUES (?, ?)",

            // Valores que substituirão os ?
            [nome, email]
        );

        // Retorna o resultado da operação
        return resultado;
    }

    // Método para atualizar professor
    static async atualizar(id, nome, email) {

        // Executa o UPDATE
        const [resultado] = await db.execute(

            // SQL de atualização
            "UPDATE professor SET nome = ?, email = ? WHERE id = ?",

            // Valores dos parâmetros
            [nome, email, id]
        );

        // Retorna resultado
        return resultado;
    }

    // Método para excluir professor
    static async excluir(id) {

        // Executa o DELETE
        const [resultado] = await db.execute(

            // SQL de exclusão
            "DELETE FROM professor WHERE id = ?",

            // ID recebido
            [id]
        );

        // Retorna resultado
        return resultado;
    }
}

// Exporta a classe
module.exports = ProfessorModel;