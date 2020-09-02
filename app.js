const express = require('express');
const app = express();
const db = require('./db');
const { User } = db.models;

module.exports = app;

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await User.findAll({ order: [['name']]}));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/users/:id', async(req, res, next)=> {
  try {
    res.send(await User.findByPk(req.params.id));
  }
  catch(ex){
    next(ex);
  }
});
