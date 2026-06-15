// Importa o model de disciplina para acessar a camada de dados.
const DisciplinaModel =
require("../models/disciplinaModel");

// Define a classe responsável pelas regras de negócio de disciplina.
class DisciplinaService {

    // Lista todas as disciplinas cadastradas.
    static async listar() {

        // Chama o model para buscar os registros.
        return await DisciplinaModel.listar();

    }

    // Busca uma disciplina pelo ID informado.
    static async buscarPorId(id) {
        // Solicita a disciplina ao model.
        return await DisciplinaModel.buscarPorId(id);
    }

    // Cria uma nova disciplina com os dados recebidos.
    static async criar(dados) {

        // Envia os campos nome, carga horária e professor ao model.
        return await DisciplinaModel.criar(
            dados.nome,
            dados.carga_horaria,
            dados.professor_id
        );
    }

    // Atualiza os dados de uma disciplina existente.
    static async atualizar(id, dados) {
        // Chama o model com os valores para atualização.
        return await DisciplinaModel.atualizar(id, dados.nome, dados.carga_horaria, dados.professor_id);
    }

    // Exclui uma disciplina pelo ID informado.
    static async excluir(id) {

        // Solicita a remoção do registro no model.
        return await DisciplinaModel.excluir(id);

    }
}

// Exporta a classe de serviço para uso pelos controladores.
module.exports = DisciplinaService;