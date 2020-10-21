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
  const { side } = req.query; //will refer to question or answer in card data

  if (!side || side === 'hint') {
    return res.redirect(`/cards/${id}?side=question`);
  }

  res.locals = {
    id,
    side,
    text: cards[id][side],
    lastCardId: cards.length - 1,
    username: req.cookies.username,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0F7y3MjYFAS-BkaeNyMUAxRNKqoSKkYXn9A&usqp=CAU',
    name: 'Booster'
  };

  if (side === 'question') {
    res.locals.hint = cards[id]['hint'];
  }

  res.render('card');
});

module.exports = router;
