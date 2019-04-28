const express = require('express');
const router = express.Router();
const listCtrl = require('../controllers/list');

router.post('/create', (req, res) => {
  listCtrl
    .create(req.body)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

router.get('/users/:id', (req, res) => {
  listCtrl
    .getByUserId(req.params.id)
    .then((lists) => res.json(lists))
    .catch((err) => next(err));
});

router.put('/:id', (req, res, next) => {
  listCtrl
    .update(req.body)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res, next) => {
  listCtrl
    .remove(req.params.id)
    .then(() => res.json(req.params.id))
    .catch((err) => next(err));
});

module.exports = router;
