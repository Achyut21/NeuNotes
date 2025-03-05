// backend/tests/app.test.js
import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('should return a status 200 and a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("NeuNotes Backend is running!");
  });
});