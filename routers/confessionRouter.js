const express = require("express");
const router = express.Router();
const confessionController =require("../controllers/confessionController")

router.post("/post-confession", confessionController.postConfession);

module.exports = router;