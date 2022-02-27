const express = require('express');

const app = express();

// send send object as json

app.get('/', (req, res) => {
  res.json({
    name: 'John Doe',
    age: 30,
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
