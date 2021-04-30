const {Router} = require('express');
const controller = require('../../controllers/call.controller');

const router = new Router();

router.post('/', controller.addCall);

router.get('/', controller.getCalls);

module.exports = router;
