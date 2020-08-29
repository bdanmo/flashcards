/*
 * MODULES AND SETUP
 */

const express = require('express');
const app = express();

/*
 * ROUTES
 */

app.get('/', (req, res) => {
  res.send('<h1>Bingo.</h1>');
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
