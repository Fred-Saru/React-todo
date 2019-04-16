const express = require('express');
const router = express.Router();

const listItemCtrl = require('../controllers/listItem');

router.post('/create', (req, res) => {
  listItemCtrl
    .create(req.body)
    .then(() => res.json({ message: 'List item successfully created' }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res) => {
  listItemCtrl
    .getById(req.params.id)
    .then((listItem) => res.json(listItem))
    .catch((err) => next(err));
});

router.put('/:id', (req, res) => {
  listItemCtrl
    .update(req.params.id, req.body)
    .then((listItem) => res.json(listItem))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res) => {
  listItemCtrl
    .delete(req.params.id)
    .then(() => res.json({ message: 'List item successfully deleted' }))
    .catch((err) => next(err));
});

module.exports = router;
