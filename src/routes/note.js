const express = require("express");
const router = express.Router();
const notes = require("../controllers/note");
const { schema, editSchema } = require("../validations/note");
const { validate } = require("../validations/middlewares");
const { authUser } = require("../utils/middlewares");

router.get("/", authUser, notes.find);

router.post("/new", authUser, validate(schema), notes.new);

router.patch("/edit", authUser, validate(editSchema), notes.edit);

router.delete("/delete", authUser, notes.delete);

module.exports = router;
