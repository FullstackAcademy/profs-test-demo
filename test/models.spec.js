const { expect } = require('chai');
const db = require('../db');
const { User } = db.models;

describe('Models', ()=> {
  beforeEach(async()=> {
    await db.syncAndSeed();
  });
  describe('User Model', ()=> {
    describe('User.findByName', ()=> {
      it('when called with moe returns moe', async()=> {
        const moe = await User.findByName('moe'); 
        expect(moe.name).to.equal('moe');
      });
    });
  });
});
