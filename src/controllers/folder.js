const Folder = require("../models/folder");

module.exports.find = async (req, res) => {
  const folders = await Folder.find({});
  res.send(folders);
};

module.exports.new = async (req, res, next) => {
  try {
    const { title, parent_id } = req.body;
    const folder = await new Folder({
      title,
      parent_id,
    });
    folder.save();
    res.send(folder);
  } catch (error) {
    console.log("Error creating new folder.");
    return next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const folder = await Folder.findByIdAndDelete(_id);
    res.send(folder);
  } catch (error) {
    console.log("Error deleting folder.");
    return next(error);
  }
};

module.exports.edit = async (req, res, next) => {
  try {
    const { _id, title } = req.body;
    const folder = await Folder.findByIdAndUpdate(_id, { title });
    res.send(folder);
  } catch (error) {
    console.log("Error editing folder.");
    return next(error);
  }
};
