const express = require("express");
const router = express.Router();
const folders = require("../controllers/folder");

router.get("/", folders.findFolders);

module.exports = router;
