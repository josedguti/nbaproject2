const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');


router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/', teamsCtrl.create);
router.delete('/:id', teamsCtrl.delete);
router.get('/:id/edit', teamsCtrl.edit);
router.put('/:id', teamsCtrl.update);

module.exports = router;