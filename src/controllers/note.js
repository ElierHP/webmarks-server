const Note = require("../models/note");
const { catchAsync } = require("../utils/index");

module.exports.find = catchAsync(async (req, res) => {
  const notes = await Note.find({ user_id: req.user._id });
  res.send(notes);
});

module.exports.new = catchAsync(async (req, res) => {
  const { title, parent_id, body } = req.body;
  const note = await new Note({
    type: "note",
    title,
    body,
    parent_id,
    user_id: req.user._id,
  });
  note.save();
  res.send(note);
});

module.exports.delete = catchAsync(async (req, res) => {
  const { _id } = req.body;
  const note = await Note.findByIdAndDelete(_id);
  res.send(note);
});

module.exports.edit = catchAsync(async (req, res) => {
  const { _id, title, body } = req.body;
  await Note.findByIdAndUpdate(_id, { title, body });
  const editedNote = await Note.findById(_id);
  res.send(editedNote);
});
