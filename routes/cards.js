const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
  const randomId = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${randomId}?side=question`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const { side } = req.query;

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  res.locals = {
    id,
    side,
    text: cards[id][side],
    lastCardId: cards.length - 1,
    username: req.cookies.username
  };

  if (side === 'question') {
    res.locals.hint = cards[id]['hint'];
    res.locals.sideToShow = 'answer'
  }

  if (side === 'answer') { 
    res.locals.sideToShow = 'question'
  }

  res.render('card');
});

module.exports = router;
