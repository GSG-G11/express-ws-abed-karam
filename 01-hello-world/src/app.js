// create express app

const express = require('express');

const app = express();

// route handler

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listen for connections

app.listen(3000, () => {
  console.log('server is listenting to port 3000');
});
