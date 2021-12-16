const express = require("express");
const router = express.Router();
const links = require("../controllers/link");

router.get("/", links.find);

router.post("/new", links.new);

router.patch("/edit", links.edit);

router.delete("/delete", links.delete);

module.exports = router;
