// Importa express
const express = require('express');

// Cria aplicação
const app = express();

// Habilita JSON
app.use(express.json());

// Importa rotas
const professorRoutes = require('./routes/professorRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');

// Define rotas
app.use('/professores', professorRoutes);
app.use('/disciplinas', disciplinaRoutes);

// Exporta a aplicação para testes e reutilização
module.exports = app;

// Inicia servidor apenas quando executado diretamente
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
}
