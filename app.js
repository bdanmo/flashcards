/*
 * MODULE IMPORT AND APP SETUP
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

/* ROUTER */
app.use(mainRoutes);
app.use('/cards', cardRoutes);

/*
 * CUSTOM MIDDLEWARE
 */

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

module.exports = app;