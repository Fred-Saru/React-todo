const express = require('express');
const router = express.Router();

const listCtrl = require('../controllers/list');

router.post('/create', (req, res) => {
  listCtrl
    .create(req.body)
    .then(() => res.json({ message: 'List successfully created' }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res) => {
  listCtrl
    .getById(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

router.put('/:id', (req, res) => {
  listCtrl
    .update(req.params.id, req.body)
    .then((list) => res.json(list))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res) => {
  listCtrl
    .delete(req.params.id)
    .then(() => res.send({ message: 'List successfully deleted' }))
    .catch((err) => next(err));
});

module.exports = router;
