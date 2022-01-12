const express = require("express");
const router = express.Router();
const links = require("../controllers/link");
const { schema, editSchema } = require("../validations/link");
const { validate } = require("../validations/middlewares");
const { authUser } = require("../utils/middlewares");

router.get("/", links.find);

router.post("/new", validate(schema), links.new);

router.patch("/edit", validate(editSchema), links.edit);

router.delete("/delete", links.delete);

module.exports = router;
