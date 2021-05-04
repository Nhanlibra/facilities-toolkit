const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user.model');

passport.use(new LocalStrategy({usernameField: 'email'},
    (email, password, next) => {
      User.findOne({'email': email})
          .then((dbUser) => {
            if (!dbUser) {
              return next(null, fase, {
                message: 'Incorrect email',
              });
            } else if (!dbUser.validatePassword(password)) {
              return next(null, false, {
                message: 'Incorrect password',
              });
            }
            return next(null, dbUser);
          });
    },
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
