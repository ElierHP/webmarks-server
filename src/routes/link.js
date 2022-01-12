const express = require("express");
const router = express.Router();
const links = require("../controllers/link");
const { schema, editSchema } = require("../validations/link");
const { validate } = require("../validations/middlewares");
const { authUser } = require("../utils/middlewares");

router.get("/", links.find);

router.post("/new", authUser, validate(schema), links.new);

router.patch("/edit", authUser, validate(editSchema), links.edit);

router.delete("/delete", authUser, links.delete);

module.exports = router;
