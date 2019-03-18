const express = require('express');
const router = express.Router();

const listItemCtrl = require('../controllers/listItem');

router.post('/create', listItemCtrl.create);
router.get('/:id', listItemCtrl.read);
router.put('/:id', listItemCtrl.update);
router.delete('/:id', listItemCtrl.delete);

module.exports = router;
