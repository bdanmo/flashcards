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
  res.render('index.pug');
});

app.get('/jankt', (req, res) => {
  res.send('<h1>Get jankt, dingus.</h1>');
});

/*
 * RUN
 */

app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
});
