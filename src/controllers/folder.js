const Folder = require("../models/folder");
const { catchAsync } = require("../utils/index");

module.exports.find = catchAsync(async (req, res) => {
  const folders = await Folder.find({});
  res.send(folders);
});

module.exports.new = catchAsync(async (req, res, next) => {
  const { title, parent_id } = req.body;
  const folder = await new Folder({
    title,
    parent_id,
  });
  folder.save();
  res.send(folder);
});

module.exports.delete = catchAsync(async (req, res, next) => {
  const { _id } = req.body;
  const folder = await Folder.findByIdAndDelete(_id);
  res.send(folder);
});

module.exports.edit = catchAsync(async (req, res, next) => {
  const { _id, title } = req.body;
  const folder = await Folder.findByIdAndUpdate(_id, { title });
  res.send(folder);
});
