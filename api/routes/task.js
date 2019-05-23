const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task');

router.post('/create', (req, res, next) => {
  taskCtrl
    .create(req.body)
    .then((task) => res.json(task))
    .catch((err) => next(err));
});

router.put('/:id', (req, res, next) => {
  taskCtrl
    .update(req.body)
    .then((task) => res.json(task))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res, next) => {
  taskCtrl
    .remove(req.params.id)
    .then(() => res.json(req.params.id))
    .catch((err) => next(err));
});

router.get('/lists/:id', (req, res, next) => {
  taskCtrl
    .getByListId(req.params.id)
    .then((tasks) => res.json(tasks))
    .catch((err) => next(err));
});

module.exports = router;