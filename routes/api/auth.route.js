const {Router} = require('express');
const controller = require('../../controllers/auth.controller');
const passport = require('../../config/passport');

const router = new Router();

router.post('/login', passport.authenticate('local'), controller.login);

router.post('/signup', controller.signUp);

router.get('/logout', controller.logout);

router.get('/user-data', controller.getUserData);

module.exports = router;
