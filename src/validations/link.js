const yup = require("yup");

module.exports.schema = yup.object().shape({
  title: yup.string().required().max("20"),
  url: yup.string().required().url(),
  parent_id: yup.string().required(),
});

module.exports.editSchema = yup.object().shape({
  title: yup.string().required().max("20"),
  url: yup.string().required().url(),
  _id: yup.string().required(),
});
