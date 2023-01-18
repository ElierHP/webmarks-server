const yup = require("yup");

module.exports.schema = yup.object().shape({
  title: yup.string().required().max("20"),
  url: yup.string().required().url().max("2048"),
  parent_id: yup.string().required(),
});

module.exports.editSchema = yup.object().shape({
  title: yup.string().required().max("20"),
  url: yup.string().required().url().max("2048"),
  _id: yup.string().required(),
});
