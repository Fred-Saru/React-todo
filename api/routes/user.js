const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/register', (req, res) => {
  userCtrl
    .register(req.body)
    .then(() => res.send('User successfully created.'))
    .catch((err) => next(err));
});

router.post('/authenticate', (req, res) => {
  userCtrl
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: 'Username or password is invalid.' })
    )
    .catch((err) => next(err));
});

router.get('/', (req, res) => {
  userCtrl
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
});

router.get('/:id', (req, res) => {
  userCtrl
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
});

router.put('/:id', (req, res) => {
  userCtrl
    .update(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res) => {
  userCtrl
    .delete(req.params.id)
    .then(() => res.send('User successfully deleted.'))
    .catch((err) => next(err));
});

module.exports = router;
