const User = require('../models/user.model');

const login = ({user}, res) => {
  res.json({
    email: user.email,
    id: user._id,
  });
};

const signUp = ({body}, res) => {
  User.create({
    username: body.username,
    email: body.email,
    password: body.password,
  })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
};

const logout = (req, res) => {
  req.logout();
};

const getUserData = ({user}, res) => {
  if (!user) {
    res.json({});
  } else {
    res.json({
      id: user._id,
      email: user.email,
      username: user.username,
    });
  }
};

module.exports = {login, signUp, logout, getUserData};
