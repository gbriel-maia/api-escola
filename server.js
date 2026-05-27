// Importa a instância do aplicativo Express configurado em src/app.js
const app = require('./src/app')

// Define a porta em que o servidor irá escutar
const port = 3000

// Inicia o servidor HTTP e exibe uma mensagem de quando ele estiver disponível
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})