const request = require('supertest');
const app = require('../src/server');

describe('API Endpoints', () => {
  test('GET / returns status ok', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('POST /calculate adds numbers correctly', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({
        operation: 'add',
        a: 5,
        b: 3
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(8);
  });

  test('POST /calculate multiplies numbers correctly', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({
        operation: 'multiply',
        a: 4,
        b: 7
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(28);
  });

  test('POST /calculate returns error for invalid operation', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({
        operation: 'divide',
        a: 10,
        b: 2
      });
    
    expect(response.statusCode).toBe(400);
  });

  test('POST /calculate returns error for invalid numbers', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({
        operation: 'add',
        a: 'not-a-number',
        b: 2
      });
    
    expect(response.statusCode).toBe(400);
  });
});