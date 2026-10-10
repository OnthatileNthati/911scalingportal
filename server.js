const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/nodemon', (req, res) => {
  res.send('nodemon works!');
});

app.get('/views', (req, res) => {
  res.render('home', { name: 'Ontha' });
});

app.listen(3000, () => console.log('Running on http://localhost:3000')); 