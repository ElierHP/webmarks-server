module.exports.validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (err) {
    return res.sendStatus(500) && next(err);
  }
};
