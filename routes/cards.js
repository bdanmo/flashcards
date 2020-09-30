const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const { side } = req.query; //will refer to question or answer in card data

  res.locals = {
    id,
    side,
    text: cards[id][side],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0F7y3MjYFAS-BkaeNyMUAxRNKqoSKkYXn9A&usqp=CAU',
    name: 'Booster'
  };

  if (side === 'question') {
    res.locals.hint = cards[id][side];
  }

  res.render('card');
});

module.exports = router;
