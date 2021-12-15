const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Folder", folderSchema);
