/*
 * MODULE IMPORT AND APP SETUP
 */

const express = require('express');
const app = express();
app.set('view engine', 'pug');

const friends = [
  { name: 'Chris McGuire', first: 'Chris', last: 'McGuire' },
  { name: 'Stephen Horne', first: 'Stephen', last: 'Horne' },
  { name: 'Benjamin McGrath', first: 'Benjamin', last: 'McGrath' },
  { name: 'Ben Drake', first: 'Ben', last: 'Drake' },
  { name: 'Christopher McGarvey', first: 'Christopher', last: 'McGarvey' }
];

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

app.get('/sandbox', (req, res) => {
  res.locals = { friends };
  res.render('sandbox');
});

/*
 * RUN
 */

app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
});
