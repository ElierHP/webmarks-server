const express = require("express");
const router = express.Router();
const users = require("../controllers/user");
const passport = require("passport");
const { schema } = require("../validations/user");
const { validate } = require("../validations/middlewares");
const { authUser } = require("../utils/middlewares");

router.get("/", users.user);

router.post("/new", validate(schema), users.newUser);

router.post("/login", passport.authenticate("local"), users.login);

router.delete("/logout", authUser, users.logout);

module.exports = router;
