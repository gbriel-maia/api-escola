const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const supertest = require('supertest');

function clearModuleCache() {
  const projectRoot = path.resolve(__dirname, '..');

  [
    'src/app.js',
    'src/routes/professorRoutes.js',
    'src/routes/disciplinaRoutes.js',
    'src/controllers/professorController.js',
    'src/controllers/disciplinaController.js',
    'src/services/professorService.js',
    'src/services/disciplinaService.js',
    'src/models/professorModel.js',
    'src/models/disciplinaModel.js',
  ].forEach((relativePath) => {
    const absolutePath = path.join(projectRoot, relativePath);
    delete require.cache[absolutePath];
  });
}

function loadAppWithMocks({ professores = [], disciplinas = [] } = {}) {
  const projectRoot = path.resolve(__dirname, '..');

  const professorModelPath = path.join(projectRoot, 'src/models/professorModel.js');
  const disciplinaModelPath = path.join(projectRoot, 'src/models/disciplinaModel.js');
  const appPath = path.join(projectRoot, 'src/app.js');

  clearModuleCache();

  const originalProfessor = require.cache[professorModelPath];
  const originalDisciplina = require.cache[disciplinaModelPath];
  const originalApp = require.cache[appPath];

  require.cache[professorModelPath] = {
    id: professorModelPath,
    filename: professorModelPath,
    loaded: true,
    exports: {
      listar: async () => professores,
      buscarPorId: async (id) => professores.find((professor) => professor.id === Number(id)) ?? null,
      criar: async (nome, email) => ({ insertId: 1, nome, email }),
      atualizar: async (id, nome, email) => ({ affectedRows: 1, id: Number(id), nome, email }),
      excluir: async (id) => ({ affectedRows: 1, id: Number(id) }),
    },
  };

  require.cache[disciplinaModelPath] = {
    id: disciplinaModelPath,
    filename: disciplinaModelPath,
    loaded: true,
    exports: {
      listar: async () => disciplinas,
      buscarPorId: async (id) => disciplinas.find((disciplina) => disciplina.id === Number(id)) ?? null,
      criar: async (nome, carga_horaria, professor_id) => ({ insertId: 1, nome, carga_horaria, professor_id }),
      atualizar: async (id, nome, carga_horaria, professor_id) => ({ affectedRows: 1, id: Number(id), nome, carga_horaria, professor_id }),
      excluir: async (id) => ({ affectedRows: 1, id: Number(id) }),
    },
  };

  delete require.cache[appPath];

  const app = require(appPath);

  return {
    app,
    restore() {
      clearModuleCache();

      if (originalProfessor) {
        require.cache[professorModelPath] = originalProfessor;
      }

      if (originalDisciplina) {
        require.cache[disciplinaModelPath] = originalDisciplina;
      }

      if (originalApp) {
        require.cache[appPath] = originalApp;
      }
    },
  };
}

test('GET /professores returns the mocked professor list', async (t) => {
  const mockProfessores = [{ id: 1, nome: 'João', email: 'joao@example.com' }];
  const { app, restore } = loadAppWithMocks({ professores: mockProfessores });

  t.after(restore);

  const response = await supertest(app).get('/professores').expect(200);

  assert.deepStrictEqual(response.body, mockProfessores);
});

test('POST /professores creates a professor with the provided payload', async (t) => {
  const { app, restore } = loadAppWithMocks();

  t.after(restore);

  const response = await supertest(app)
    .post('/professores')
    .send({ nome: 'Maria', email: 'maria@example.com' })
    .expect(201);

  assert.deepStrictEqual(response.body, { insertId: 1, nome: 'Maria', email: 'maria@example.com' });
});

test('GET /professores/:id returns the requested professor', async (t) => {
  const mockProfessores = [{ id: 1, nome: 'João', email: 'joao@example.com' }];
  const { app, restore } = loadAppWithMocks({ professores: mockProfessores });

  t.after(restore);

  const response = await supertest(app).get('/professores/1').expect(200);

  assert.deepStrictEqual(response.body, mockProfessores[0]);
});

test('PUT /professores/:id updates the requested professor', async (t) => {
  const { app, restore } = loadAppWithMocks();

  t.after(restore);

  const response = await supertest(app)
    .put('/professores/1')
    .send({ nome: 'João Atualizado', email: 'joao.atualizado@example.com' })
    .expect(200);

  assert.deepStrictEqual(response.body, {
    affectedRows: 1,
    id: 1,
    nome: 'João Atualizado',
    email: 'joao.atualizado@example.com',
  });
});

test('DELETE /professores/:id removes the requested professor', async (t) => {
  const { app, restore } = loadAppWithMocks();

  t.after(restore);

  const response = await supertest(app).delete('/professores/1').expect(200);

  assert.deepStrictEqual(response.body, { affectedRows: 1, id: 1 });
});

test('GET /disciplinas returns the mocked discipline list', async (t) => {
  const mockDisciplinas = [{ id: 1, nome: 'Matemática', carga_horaria: 80, professor: 'João' }];
  const { app, restore } = loadAppWithMocks({ disciplinas: mockDisciplinas });

  t.after(restore);

  const response = await supertest(app).get('/disciplinas').expect(200);

  assert.deepStrictEqual(response.body, mockDisciplinas);
});

test('POST /disciplinas creates a discipline using the request payload', async (t) => {
  const { app, restore } = loadAppWithMocks();

  t.after(restore);

  const response = await supertest(app)
    .post('/disciplinas')
    .send({ nome: 'História', carga_horaria: 60, professor_id: 1 })
    .expect(201);

  assert.deepStrictEqual(response.body, {
    insertId: 1,
    nome: 'História',
    carga_horaria: 60,
    professor_id: 1,
  });
});

test('GET /disciplinas/:id returns the requested discipline', async (t) => {
  const mockDisciplinas = [{ id: 1, nome: 'Matemática', carga_horaria: 80, professor_id: 1 }];
  const { app, restore } = loadAppWithMocks({ disciplinas: mockDisciplinas });

  t.after(restore);

  const response = await supertest(app).get('/disciplinas/1').expect(200);

  assert.deepStrictEqual(response.body, mockDisciplinas[0]);
});

test('PUT /disciplinas/:id updates the requested discipline', async (t) => {
  const { app, restore } = loadAppWithMocks();

  t.after(restore);

  const response = await supertest(app)
    .put('/disciplinas/1')
    .send({ nome: 'Física', carga_horaria: 90, professor_id: 2 })
    .expect(200);

  assert.deepStrictEqual(response.body, {
    affectedRows: 1,
    id: 1,
    nome: 'Física',
    carga_horaria: 90,
    professor_id: 2,
  });
});

test('DELETE /disciplinas/:id removes the requested discipline', async (t) => {
  const { app, restore } = loadAppWithMocks();

  t.after(restore);

  const response = await supertest(app).delete('/disciplinas/1').expect(200);

  assert.deepStrictEqual(response.body, { affectedRows: 1, id: 1 });
});
