const express = require("express");
const router = express.Router();
const folders = require("../controllers/folder");
const { schema, editSchema } = require("../validations/folder");
const { validate } = require("../validations/middlewares");
const { authUser } = require("../utils/middlewares");

router.get("/", authUser, folders.find);

router.post("/new", authUser, validate(schema), folders.new);

router.patch("/edit", authUser, validate(editSchema), folders.edit);

router.delete("/delete", authUser, folders.delete);

module.exports = router;
