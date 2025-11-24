const request = require('supertest');
const app = require('../src/app');

describe('Testes da API', () => {
  test('GET / deve retornar mensagem', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('CI/CD funcionando!');
  });

  test('GET /health deve retornar status healthy', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});