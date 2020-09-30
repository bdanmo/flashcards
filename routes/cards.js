const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.locals = {
    prompt: cards[id].question,
    hint: cards[id].hint,
    answer: cards[id].answer,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0F7y3MjYFAS-BkaeNyMUAxRNKqoSKkYXn9A&usqp=CAU',
    name: 'Booster'
  };
  res.render('card');
});

module.exports = router;
