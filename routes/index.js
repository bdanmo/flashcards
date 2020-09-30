const express = require('express');
const router = express.Router();
const { friends } = require('../friends.json');

/*
 * GET ROUTES
 */
router.get('/', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.render('index', { username });
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res) => {
  if (req.cookies.username) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.get('/sandbox', (req, res) => {
  res.locals = { friends };
  res.render('sandbox');
});

/*
 * POST ROUTES
 */
router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username); //req.body.username refers to form input
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;
