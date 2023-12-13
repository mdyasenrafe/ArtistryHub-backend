const express = require("express");
const {
  CreatePaintings,
  GetPaintings,
} = require("../controllers/PaintingTypeControllers");

const router = express.Router();

router.post("/create", CreatePaintings);
router.get("/get", GetPaintings);

module.exports = router;
