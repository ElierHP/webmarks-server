module.exports.authUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    throw new Error("Unauthorized");
  }
};
