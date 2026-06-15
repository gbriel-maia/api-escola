// Importa o model de professor
const ProfessorModel = require("../models/professorModel");

// Cria a camada de regras de negócio
class ProfessorService {

    // Método para listar professores
    static async listar() {

        // Chama o model
        const professores = await ProfessorModel.listar();

        // Retorna os dados
        return professores;
    }

    // Método para buscar professor por ID
    static async buscarPorId(id) {

        // Chama o model
        const professor = await ProfessorModel.buscarPorId(id);

        // Retorna professor encontrado
        return professor;
    }

    // Método para criar professor
    static async criar(dados) {

        // Chama o model enviando os dados
        const resultado = await ProfessorModel.criar(
            dados.nome,
            dados.email
        );

        // Retorna resultado
        return resultado;
    }

    // Método para atualizar professor
    static async atualizar(id, dados) {

        // Chama o model
        const resultado = await ProfessorModel.atualizar(
            id,
            dados.nome,
            dados.email
        );

        // Retorna resultado
        return resultado;
    }

    // Método para excluir professor
    static async excluir(id) {

        // Chama o model
        const resultado = await ProfessorModel.excluir(id);

        // Retorna resultado
        return resultado;
    }
}

// Exporta a classe
module.exports = ProfessorService;