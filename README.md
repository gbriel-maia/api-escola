# API MVC com Node.js + Express + MySQL

## Tecnologias

- Node.js
- Express
- MySQL
- JavaScript
- MVC
- Async/Await

---

## Instalação

1. Instale as dependências do projeto:

```bash
npm install
```

2. Configure o banco de dados MySQL e crie a base de dados `escola` usando o arquivo:

```bash
# Importe o script no MySQL ou execute com a ferramenta de sua preferência
database.sql
```

> O banco de dados deve conter a tabela `professores` conforme o script `database.sql`.

---

## Executar projeto

Inicie a API com o comando:

```bash
npm start
```

O servidor roda por padrão em `http://localhost:3000`.

---

## Rotas da API

A API expõe as operações CRUD para os recursos `professores` e `disciplinas`.

### Professores

- Listar todos: GET /professores
- Buscar por ID: GET /professores/:id
- Criar: POST /professores
- Atualizar: PUT /professores/:id
- Excluir: DELETE /professores/:id

### Disciplinas

- Listar todas: GET /disciplinas
- Buscar por ID: GET /disciplinas/:id
- Criar: POST /disciplinas
- Atualizar: PUT /disciplinas/:id
- Excluir: DELETE /disciplinas/:id

Exemplo de corpo para criar ou atualizar um professor:

```json
{
  "nome": "João",
  "email": "joao@gmail.com"
}
```

Exemplo de corpo para criar ou atualizar uma disciplina:

```json
{
  "nome": "Matemática",
  "carga_horaria": 80,
  "professor_id": 1
}
```

---

## Observações

- As requisições devem ser enviadas com `Content-Type: application/json` para endpoints que recebem corpo.
- A aplicação usa `mysql2/promise` para conectar ao banco de dados com pool de conexões.
- O arquivo `database.sql` define as tabelas necessárias para `professor` e `disciplina`.
