const express = require('express');
const router = express.Router();

const listCtrl = require('../controllers/list');

router.post('/create', listCtrl.create);
router.get('/:id', listCtrl.read);
router.put('/:id', listCtrl.update);
router.delete('/:id', listCtrl.delete);

module.exports = router;
