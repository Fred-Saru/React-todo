const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task');

router.post('/create', (req, res) => {
  taskCtrl
    .create(req.body)
    .then((task) => res.json(task))
    .catch((err) => next(err));
});

router.put('/:id', (req, res) => {
  taskCtrl
    .update(req.body)
    .then((task) => res.json(task))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res) => {
  taskCtrl
    .remove(req.params.id)
    .then(() => res.json(req.params.id))
    .catch((err) => next(err));
});

router.get('/lists/:id', (req, res) => {
  taskCtrl
    .create(req.params.id)
    .then((tasks) => res.json(tasks))
    .catch((err) => next(err));
});

module.exports = router;