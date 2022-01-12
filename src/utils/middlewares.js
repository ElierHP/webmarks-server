module.exports.authUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send({ isLoggedIn: req.session.isLoggedIn, msg: "unauthorized" });
  }
};
