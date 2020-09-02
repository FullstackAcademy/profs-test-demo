const Sequelize = require('sequelize');
const { STRING } = Sequelize;

const config = {};
if(process.env.QUIET){
  config.logging = false;
}

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db', config);

const User = conn.define('user', {
  name: STRING 
});

User.findByName = (name)=> User.findOne({ where: { name }});

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await Promise.all([
    User.create({ name: 'moe' }),
    User.create({ name: 'lucy' }),
    User.create({ name: 'ethyl' }),
  ]);
};

module.exports = {
  models: {
    User
  },
  syncAndSeed
};
