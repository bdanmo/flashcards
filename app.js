/*
 * MODULE IMPORT AND APP SETUP
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');

/* ROUTER */
app.use(routes);

/*
 * CUSOTM MIDDLEWARE
 */

app.use((req, res, next) => {
  console.log('Hello');
  next();
});

/*
 * ERROR HANDLING
 */

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.render('error', { err });
});

/*
 * RUN
 */

app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
});
