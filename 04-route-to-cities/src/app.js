const express = require('express');

const app = express();

// create 3 handlers for 3 paths

app.get('/cities', (req, res) => {
  res.json([
    {
      city: 'New York',
      population: 8550405,
    },
    {
      city: 'Los Angeles',
      population: 3971883,
    },
    {
      city: 'Chicago',
      population: 2720546,
    },
  ]);
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Cities explorer</h1>');
});

app.get('/help', (req, res) => {
  res.send('<h1>Help page</h1>');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
