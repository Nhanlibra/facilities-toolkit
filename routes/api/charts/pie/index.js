const {Router} = require('express');
const controller = require('../../../../controllers/charts/pie.controller');

const router = new Router();

router.get('/commoncalls', controller.getCommonCalls);

module.exports = router;
