// 1. settings and middleware (BEFORE routes)
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));              // serves /css, /js, /images
app.use(express.urlencoded({ extended: true })); // reads form data

// 2. routes
app.get('/login', (req, res) => res.render('login'));
app.get('/dashboard', (req, res) => res.render('dashboard', { username: 'Ontha' }));


app.get('/login.js', (req, res) => {
  res.sendFile(__dirname + '/public/js/login.js');
});


// 3. start the server (LAST)
app.listen(3000, () => console.log('Running on http://localhost:3000'));