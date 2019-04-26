const express = require('express');
const router = express.Router();
const listCtrl =  require('../controllers/list');

router.get('/users/:id', (req, res) => {
  listCtrl
    .getByUserId(req.params.id)
    .then((lists) => res.json(lists))
    .catch((err) => next(err));
});

router.post('/create', (req, res) => {
  listCtrl
    .create(req.body)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

router.put('/:id', (req, res) => {
  listCtrl
    .update(req.body)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res) => {
  listCtrl
    .remove(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

module.exports = router;