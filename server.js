const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl.js');
const app = express();

app.use(bodyParser.json());

app.get('/api/users', function(req, res, next) {
  res.status(200).json(userCtrl.readAll())
})

app.get('/api/users/:id', (req, res, next) => {
  res.status(200).json(userCtrl.findUserById(req.params.id))
})

app.get('/api/admins', (req, res) => {
  res.status(200).json(userCtrl.getAdmins())
})

app.get('/api/nonadmins', (req, res) => {
  res.status(200).json(userCtrl.getNonAdmins())
})

app.get('/api/favorites/:favorites', (req, res) => {
  res.status(200).json(userCtrl.getUsersByFavorite(req.params.favorites))
})

app.get('/api/aged/:age', (req, res) => {
  res.status(200).json(userCtrl.getUsersByAgeLimit(req.params.age))
})

app.get('/api/user/query', (req, res) => {
  for(let prop in req.query){
  res.status(200).json(userCtrl.findUserByQuery(prop, req.query[prop]))
}
})

app.post('/api/users', (req, res) => {
  res.status(200).json(userCtrl.createUser(req.body))
})

app.put('/api/users/:id', (req, res) => {
  res.status(200).json(userCtrl.updateUser(req.params.id, req.body))
})

app.delete('/api/users/:id', (req, res) => {
  res.status(200).json(userCtrl.removeUser(req.params.id))
})

app.listen(process.env.PORT || 3000, function(){
  console.log(`listening on port ${this.address().port}`);
})

module.exports = app;
