const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Link", linkSchema);