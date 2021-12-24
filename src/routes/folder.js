const express = require("express");
const router = express.Router();
const folders = require("../controllers/folder");
const { schema, editSchema } = require("../validations/folder");
const { validate } = require("../validations/middlewares");

router.get("/", folders.find);

router.post("/new", validate(schema), folders.new);

router.patch("/edit", validate(editSchema), folders.edit);

router.delete("/delete", folders.delete);

module.exports = router;
