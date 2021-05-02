const {Router} = require('express');
const controller = require('../../../../controllers/charts/bar.controller');

const router = new Router();

router.get('/callsperlane', controller.getCallsPerLane);

module.exports = router;
