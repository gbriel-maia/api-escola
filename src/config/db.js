// Importa o driver MySQL2 em modo Promise para usar async/await
const server = require('mysql2/promise')

// Cria um pool de conexões para o banco de dados MySQL
const poll = server.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'escola'
})

// Exporta o pool de conexões para uso nos modelos
module.exports = poll
