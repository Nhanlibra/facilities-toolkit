const User = require('../models/user.model');

const login = ({user}, res) => {
  res.json({
    email: user.email,
    id: user._id,
  });
};

const signUp = ({body}, res) => {
  User.create({...body})
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
};

const logout = (req, res) => {
  req.logout();
  res.end();
};

const getUserData = ({user}, res) => {
  if (!user) {
    res.json({});
  } else {
    // eslint-disable-next-line no-unused-vars
    const {password, ...userData} = user;
    userData['initials'] =
      `${userData.firstName.charAt(0)}.${userData.lastName.charAt(0)}`;
    res.json(userData);
  }
};

module.exports = {login, signUp, logout, getUserData};
