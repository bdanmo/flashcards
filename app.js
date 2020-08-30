/*
 * MODULE IMPORT AND aPP SETUP
 */

const express = require('express');
const app = express();
app.set('view engine', 'pug');

/*
 * ROUTES
 */

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card');
});

/*
 * RUN
 */

app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
});
