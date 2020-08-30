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
  res.locals = {
    prompt: "Who is buried in Grant's tomb?",
    hint: 'Think about whose tomb it is.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0F7y3MjYFAS-BkaeNyMUAxRNKqoSKkYXn9A&usqp=CAU',
    name: 'Booster'
  };
  res.render('card');
});

/*
 * RUN
 */

app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
});
