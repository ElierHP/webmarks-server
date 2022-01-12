const Folder = require("../models/folder");
const Link = require("../models/link");
const { catchAsync } = require("../utils/index");

module.exports.find = catchAsync(async (req, res) => {
  const folders = await Folder.find({});
  res.send(folders);
});

module.exports.new = catchAsync(async (req, res, next) => {
  const { title, parent_id } = req.body;
  const folder = await new Folder({
    type: "folder",
    title,
    parent_id,
    user_id: req.user._id,
  });
  folder.save();
  res.send(folder);
});

module.exports.delete = catchAsync(async (req, res, next) => {
  const { _id } = req.body;
  const folder = await Folder.findByIdAndDelete(_id);
  await Folder.deleteMany({ parent_id: _id });
  await Link.deleteMany({ parent_id: _id });
  res.send(folder);
});

module.exports.edit = catchAsync(async (req, res, next) => {
  const { _id, title } = req.body;
  await Folder.findByIdAndUpdate(_id, { title });
  const newFolder = await Folder.findById(_id);
  res.send(newFolder);
});
