const {Router} = require('express');

const router = new Router();

router.use('/calls', require('./calls.route'));

module.exports = router;
