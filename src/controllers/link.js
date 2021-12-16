const Link = require("../models/link");
const { catchAsync } = require("../utils/index");

module.exports.find = catchAsync(async (req, res) => {
  const links = await Link.find({});
  res.send(links);
});

module.exports.new = catchAsync(async (req, res, next) => {
  const { title, parent_id, url } = req.body;
  const link = await new Link({
    title,
    url,
    parent_id,
  });
  link.save();
  res.send(link);
});

module.exports.delete = catchAsync(async (req, res, next) => {
  const { _id } = req.body;
  const link = await Link.findByIdAndDelete(_id);
  res.send(link);
});

module.exports.edit = catchAsync(async (req, res, next) => {
  const { _id, title, url } = req.body;
  const link = await Link.findByIdAndUpdate(_id, { title, url });
  res.send(link);
});
