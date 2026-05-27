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

A API expõe as operações CRUD para o recurso `professores`.

### Listar todos os professores

GET

```text
http://localhost:3000/professores
```

### Buscar professor por ID

GET

```text
http://localhost:3000/professores/1
```

### Criar um novo professor

POST

```text
http://localhost:3000/professores
```

Body JSON:

```json
{
  "nome": "João",
  "disciplina": "Matemática",
  "email": "joao@gmail.com",
  "salario": 4500
}
```

### Atualizar um professor

PUT

```text
http://localhost:3000/professores/1
```

Body JSON:

```json
{
  "nome": "João Silva",
  "disciplina": "Matemática",
  "email": "joaosilva@gmail.com",
  "salario": 4800
}
```

### Deletar um professor

DELETE

```text
http://localhost:3000/professores/1
```

---

## Observações

- As requisições devem ser enviadas com `Content-Type: application/json` para endpoints que recebem corpo.
- A aplicação usa `mysql2/promise` para conectar ao banco de dados com pool de conexões.
- Caso a porta `3000` já esteja em uso, altere o valor da constante `port` em `server.js`.
