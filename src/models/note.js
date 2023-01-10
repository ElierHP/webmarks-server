const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
