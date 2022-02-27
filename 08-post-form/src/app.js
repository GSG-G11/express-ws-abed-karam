const express = require('express');
const path = require('path');

const app = express();

// parse incoming json using express.json()
// for post data using express.urlencoded()
app.use(express.json());

// parse urlencoded application/x-www-form-urlencoded bodies express.urlencoded({ extended: false })
// extended: false - does not allow nested objects in query strings

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

// create a post '/fruit' handler and log 'name' and 'image_url'
// redirect to '/fruit'
app.post('/fruit', (req, res) => {
  console.log(req.body);
  const {name, image_url} = req.body;
  console.log(name, image_url);
  res.redirect('/fruit');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
