const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return success message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('CI/CD PoC Application is running successfully on Feature App...');
  });
});
