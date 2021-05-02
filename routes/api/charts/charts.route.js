const {Router} = require('express');

const router = new Router();

router.use('/bar', require('./bar'));
router.use('/pie', require('./pie'));

module.exports = router;
