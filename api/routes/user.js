const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/create', userCtrl.create);

router.get('/:id', userCtrl.read);

router.put('/:id', userCtrl.update);

router.delete('/:id', userCtrl.delete);

module.exports = router;
