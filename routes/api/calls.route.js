const {Router} = require('express');

const router = new Router();

router.get('/test', (req, res) => res.json({
  test: 'Hello from /api/calls/test',
}));

module.exports = router;
