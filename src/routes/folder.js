const express = require("express");
const router = express.Router();
const folders = require("../controllers/folder");

router.get("/", folders.find);

router.post("/new", folders.new);

router.patch("/edit", folders.edit);

router.delete("/delete", folders.delete);

module.exports = router;
