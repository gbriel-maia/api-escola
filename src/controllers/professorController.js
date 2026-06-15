// Importa o serviço de professor para acessar a regra de negócio.
const ProfessorService =
require("../services/professorService");

// Define a classe responsável por controlar as requisições de professor.
class ProfessorController {

    // Lista todos os professores cadastrados.
    static async listar(req, res) {

        // Busca a lista de professores no serviço.
        const professores =
        await ProfessorService.listar();

        // Envia a lista no formato JSON como resposta.
        res.json(professores);
    }

    // Busca um professor pelo ID informado na rota.
    static async buscarPorId(req, res) {

        // Busca o professor correspondente no serviço.
        const professor =
        await ProfessorService.buscarPorId(
            req.params.id
        );

        // Retorna o professor encontrado em formato JSON.
        res.json(professor);
    }

    // Cria um novo professor com os dados recebidos no corpo da requisição.
    static async criar(req, res) {

        // Envia os dados recebidos para o serviço criar o registro.
        const resultado =
        await ProfessorService.criar(req.body);

        // Retorna o resultado com status 201 (criado).
        res.status(201).json(resultado);
    }

    // Atualiza os dados de um professor existente.
    static async atualizar(req, res) {

        // Chama o serviço para atualizar o professor informado.
        const resultado =
        await ProfessorService.atualizar(
            req.params.id,
            req.body
        );

        // Retorna o resultado da atualização em JSON.
        res.json(resultado);
    }

    // Remove um professor pelo ID informado.
    static async excluir(req, res) {

        // Solicita a exclusão do professor ao serviço.
        const resultado =
        await ProfessorService.excluir(
            req.params.id
        );

        // Envia a resposta da exclusão em JSON.
        res.json(resultado);
    }
}

// Exporta a classe para uso nas rotas.
module.exports = ProfessorController;