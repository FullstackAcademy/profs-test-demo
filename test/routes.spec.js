const { expect } = require('chai');
const app = require('supertest')(require('../app'));
const { syncAndSeed, models: { User } } = require('../db');

describe('Routes', ()=> {
  beforeEach(async()=> {
    await syncAndSeed();
  });
  describe('GET /api/users', ()=> {
    it('returns the users in alpha order', async()=> {
      const response = await app.get('/api/users');
      expect(response.status).to.equal(200);
      expect(response.body[0].name).to.equal('ethyl');
    });
  });
  describe('GET /api/users/:id', ()=> {
    it('returns the users in alpha order', async()=> {
      const lucy = await User.findByName('lucy'); 
      const response = await app.get(`/api/users/${lucy.id}`);
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal('lucy');
    });
  });

});
