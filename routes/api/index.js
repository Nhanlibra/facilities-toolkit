const {Router} = require('express');

const router = new Router();

router.use('/calls', require('./calls.route'));

router.use('/repairs', require('./repairs.route'));

router.use('/charts/data', require('./charts/charts.route'));

module.exports = router;
