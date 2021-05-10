const {Router} = require('express');
const controller = require('../../controllers/repair.controller');

const router = new Router();

router.post('/', controller.addRepair);

router.get('/count', controller.getRepairsCount);

router.get('/:status?', controller.getRepairs);

router.put('/:id', controller.editRepair);


module.exports = router;
