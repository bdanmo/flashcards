/*
 * MODULE IMPORT AND APP SETUP
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');

const friends = [
  { name: 'Chris McGuire', first: 'Chris', last: 'McGuire' },
  { name: 'Stephen Horne', first: 'Stephen', last: 'Horne' },
  { name: 'Benjamin McGrath', first: 'Benjamin', last: 'McGrath' },
  { name: 'Ben Drake', first: 'Ben', last: 'Drake' },
  { name: 'Christopher McGarvey', first: 'Christopher', last: 'McGarvey' }
];

/*
 * CUSOTM MIDDLEWARE
 */

app.use((req, res, next) => {
  console.log('Hello');
  next();
});

app.use((req, res, next) => {
  const err = new Error('Oh noes!');
  next(err);
});

/*
 * GET ROUTES
 */

app.get('/', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.render('index', { username });
  } else {
    res.redirect('/hello');
  }
});

app.get('/hello', (req, res) => {
  if (req.cookies.username) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
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
 * POST ROUTES
 */

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username); //req.body.username refers to form input
  res.redirect('/');
});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

/*
 * ERROR HANDLING
 */

app.use((err, req, res, next) => {
  res.render('error', { err });
});

/*
 * RUN
 */

app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
});
