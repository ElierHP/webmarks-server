const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Folder", folderSchema);
