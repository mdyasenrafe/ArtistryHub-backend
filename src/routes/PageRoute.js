const express = require("express");
const { CreatePage, GetPage } = require("../controllers/PageController");
const router = express.Router();

router.post("/create", CreatePage);
router.get("/get", GetPage);

module.exports = router;
