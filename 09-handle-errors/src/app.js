const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '..', 'public')));

// create a 500 middleware sending the '500.html' file
app.use((req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
});

// create a 404 middleware sending the '404.html' file
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

app.get('/fruit', (req, res) => {
  // call an undefined function in this handler to cause an error
  test();

  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

app.post('/fruit', (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
