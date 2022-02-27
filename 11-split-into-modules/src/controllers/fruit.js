const express = require('express');
const fruitRouter = express.Router();
const path = require('path');

fruitRouter.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'fruit.html'));
});

fruitRouter.post('/fruit', (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
});

module.exports = fruitRouter;
