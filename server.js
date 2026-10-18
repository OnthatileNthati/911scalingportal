// 1. settings and middleware (BEFORE routes)
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); // serves /css, /js, /images
app.use(express.urlencoded({ extended: true })); // reads form data

// 2. routes

// FIX 1: root goes to login so you don't get Cannot GET /
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => res.render('login'));


// 3. start the server (LAST)
app.listen(3000, () => console.log('Running on http://localhost:3000'));