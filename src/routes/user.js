const express = require("express");
const router = express.Router();
const users = require("../controllers/user");
const passport = require("passport");
const { schema } = require("../validations/user");
const { validate } = require("../validations/middlewares");

router.route("/").get(users.userData);

router.post("/new", validate(schema), users.newUser);

router.post("/login", passport.authenticate("local"), users.login);

router.post("/logout", users.logout);

module.exports = router;
