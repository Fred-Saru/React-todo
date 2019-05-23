const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/register', (req, res, next) => {
  userCtrl
    .register(req.body)
    .then(() => res.json({message: 'User successfully created'}))
    .catch((err) => next(err));
});

router.post('/authenticate', (req, res, next) => {
  userCtrl
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: 'Username or password is invalid.' })
    )
    .catch((err) => next(err));
});

router.get('/', (req, res, next) => {
  userCtrl
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  userCtrl
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
});

router.put('/:id', (req, res, next) => {
  userCtrl
    .update(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res, next) => {
  userCtrl
    .remove(req.params.id)
    .then(() => res.json({message:'User successfully deleted'}))
    .catch((err) => next(err));
});

module.exports = router;
