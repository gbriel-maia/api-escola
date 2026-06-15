// Importa o serviço de disciplina para acessar a regra de negócio.
const DisciplinaService =
require("../services/disciplinaService");

// Define a classe responsável por controlar as requisições de disciplina.
class DisciplinaController {

    // Lista todas as disciplinas cadastradas.
    static async listar(req, res) {

        // Busca a lista de disciplinas no serviço.
        const disciplinas =
        await DisciplinaService.listar();

        // Retorna a lista em formato JSON.
        res.json(disciplinas);
    }

    // Busca uma disciplina pelo ID informado.
    static async buscarPorId(req, res) {
        // Solicita a disciplina ao serviço e envia a resposta.
        const resultado = await DisciplinaService.buscarPorId(req.params.id);
        res.json(resultado);
    }

    // Cria uma nova disciplina com os dados recebidos.
    static async criar(req, res) {

        // Envia os dados para o serviço criar a disciplina.
        const resultado =
        await DisciplinaService.criar(
            req.body
        );

        // Retorna a disciplina criada com status 201.
        res.status(201).json(resultado);
    }

    // Atualiza os dados de uma disciplina existente.
    static async atualizar(req, res) {
        // Envia os dados para atualização e devolve o resultado.
        const resultado = await DisciplinaService.atualizar(req.params.id, req.body);
        res.json(resultado);
    }

    // Remove uma disciplina pelo ID informado.
    static async excluir(req, res) {

        // Solicita a exclusão da disciplina ao serviço.
        const resultado =
        await DisciplinaService.excluir(
            req.params.id
        );

        // Envia a confirmação da exclusão em JSON.
        res.json(resultado);
    }
}

// Exporta a classe para uso nas rotas.
module.exports = DisciplinaController;