const yup = require("yup");

module.exports.schema = yup.object().shape({
  title: yup.string().required().max("20"),
  description: yup.string().required().max("1000"),
  parent_id: yup.string().required(),
});

module.exports.editSchema = yup.object().shape({
  title: yup.string().required().max("20"),
  description: yup.string().required().max("1000"),
  _id: yup.string().required(),
});
