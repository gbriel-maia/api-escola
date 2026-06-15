// Importa a biblioteca mysql2 com suporte a Promises
const mysql = require("mysql2/promise");

// Carrega as variáveis do arquivo .env
require("dotenv").config();

// Cria um pool de conexões com o banco de dados
const pool = mysql.createPool({

    // Endereço do servidor MySQL
    host: process.env.DB_HOST,

    // Usuário do banco de dados
    user: process.env.DB_USER,

    // Senha do banco de dados
    password: process.env.DB_PASSWORD,

    // Nome do banco de dados
    database: process.env.DB_NAME,

    // Mantém as requisições aguardando quando todas as conexões estiverem ocupadas
    waitForConnections: true,

    // Quantidade máxima de conexões simultâneas
    connectionLimit: 10,

    // Quantidade máxima de requisições na fila
    queueLimit: 0
});

// Exporta o pool para ser utilizado em outros arquivos
module.exports = pool;