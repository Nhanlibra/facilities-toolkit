const {Router} = require('express');
const controller = require('../../controllers/repair.controller');

const router = new Router();

router.post('/', controller.addRepair);

router.post('/', controller.getRepairs);

module.exports = router;
