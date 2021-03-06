const User = require("../models/user");
const { catchAsync } = require("../utils/index");

module.exports.user = catchAsync(async (req, res) => {
  //If user session exists, send it back
  if (req.user) {
    req.session.isLoggedIn = true;
    res.send({ user: req.user, isLoggedIn: req.session.isLoggedIn });
  } else {
    //Send isLoggedIn as false
    req.session.isLoggedIn = false;
    res.send({ isLoggedIn: req.session.isLoggedIn });
  }
});

module.exports.newUser = catchAsync(async (req, res, next) => {
  //Create new user and register using passport
  const { username, password } = req.body;
  const user = new User({ username: username });
  User.register(user, password, (err) => {
    if (err) {
      console.log("error registering user!", err);
      return next(err);
    } else {
      res.send({ success: true });
    }
  });
});

module.exports.login = (req, res) => {
  //Set logged in session to true and send back user data
  req.session.isLoggedIn = true;
  res.send({ user: req.user, isLoggedIn: req.session.isLoggedIn });
};

module.exports.logout = (req, res) => {
  req.logout();
  //Set logged in session to false & send it back
  req.session.isLoggedIn = false;
  res.send({ isLoggedIn: req.session.isLoggedIn });
};
