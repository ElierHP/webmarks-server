const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  folders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Folder",
    },
  ],
  links: [
    {
      type: Schema.Types.ObjectId,
      ref: "Link",
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
