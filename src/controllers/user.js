const User = require("../models/user");
const { catchAsync } = require("../utils/index");

module.exports.user = catchAsync(async (req, res) => {
  // If a user exists, send it as response.
  if (req.user) {
    const { _id, username } = req.user;
    res.status(200).send({ user: { _id, username } });
  } else {
    res.status(202).send({ user: null });
  }
});

module.exports.newUser = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  // Create new user
  const user = new User({ username });

  // Register new User with passport.
  User.register(user, password, (err) => {
    if (err) {
      console.log("error registering user!", err);
      return next(err);
    } else {
      res.status(201).send({ msg: "Registered new user." });
    }
  });
});

module.exports.login = (req, res) => {
  const { _id, username } = req.user;

  // If user authenticates, send it as response.
  res.status(200).send({
    user: {
      _id,
      username,
    },
  });
};

module.exports.logout = (req, res) => {
  req.logout();
  res.status(200).send({ msg: "User has logged out." });
};
