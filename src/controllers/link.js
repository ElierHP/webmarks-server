const Link = require("../models/link");
const { catchAsync } = require("../utils/index");

module.exports.find = catchAsync(async (req, res) => {
  const links = await Link.find({ user_id: req.user._id });
  res.send(links);
});

module.exports.new = catchAsync(async (req, res) => {
  const { title, parent_id, url } = req.body;
  const link = await new Link({
    type: "link",
    title,
    url,
    parent_id,
    user_id: req.user._id,
  });
  link.save();
  res.send(link);
});

module.exports.delete = catchAsync(async (req, res) => {
  const { _id } = req.body;
  const link = await Link.findByIdAndDelete(_id);
  res.send(link);
});

module.exports.edit = catchAsync(async (req, res) => {
  const { _id, title, url } = req.body;
  await Link.findByIdAndUpdate(_id, { title, url });
  const newLink = await Link.findById(_id);
  res.send(newLink);
});
