const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const sales = [{ amount: 2000, note: 'first client' }, { amount: 5000, note: 'logo Job' }];
const tasks = [{ username: 'Ontha', task: 'Logo Design', note: 'Complete project' }];

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
  res.render('home', { username: 'Ontha', goal: 100000, sales: sales });
});

app.post('/sales', (req, res) => {
  const { amount, note } = req.body;
  sales.push({ amount: Number(amount), note: note });
  res.redirect('/views');
});

app.get('/tasks', (req, res) => {
  res.render('tasks', { tasks: tasks });
});

app.post('/tasks', (req, res) => {
  const { task, note } = req.body;
  tasks.push({ task: task, note: note });
  res.redirect('/tasks');
});
    

app.listen(3000, () => console.log('Running on http://localhost:3000')); 