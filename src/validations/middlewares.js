module.exports.validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    res.status(500).send({ name: err.name, message: err.message }) && next(err);
  }
};
