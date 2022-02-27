const express = require('express');

const app = express();

// create 1 handler for 3 paths

app.get('/cities/chicago', (req, res) => {
  res.json({
    city: 'Chicago',
    population: 4552405,
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
