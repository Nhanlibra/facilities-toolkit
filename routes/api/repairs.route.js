const {Router} = require('express');
const controller = require('../../controllers/repair.controller');

const router = new Router();

router.post('/', controller.addRepair);

router.get('/count', controller.getRepairsCount);

router.get('/:status?', controller.getRepairs);


module.exports = router;
