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
      res.status(409).send({ name: err.name, message: err.message + "." }) &&
        next(err);
    } else {
      res.status(201).send({ message: "Registered new user." });
    }
  });
});

module.exports.login = catchAsync(async (req, res) => {
  const { _id, username } = req.user;

  // If user authenticates, send it as response.
  res.status(200).send({
    user: {
      _id,
      username,
    },
  });
});

module.exports.logout = catchAsync(async (req, res) => {
  await req.logout();
  res.sendStatus(200);
});
