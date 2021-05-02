const {Router} = require('express');

const router = new Router();

router.use('/bar', require('./bar'));

module.exports = router;
