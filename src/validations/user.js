const yup = require("yup");

module.exports.schema = yup.object().shape({
  username: yup.string().required().min("5").max("20"),
  password: yup.string().required().min("5").max("30"),
});
