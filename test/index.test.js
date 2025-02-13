const request = require('supertest');
const app = require('../src/index'); // Import Express app
const http = require('http');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(() => done());
});

afterAll((done) => {
  server.close(() => done());
});

describe('GET /', () => {
  it('responds with "Hello, World!"', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
