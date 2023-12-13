const express = require("express");
const { CreateCanvas, GetCanvas } = require("../controllers/CanvasControllers");

const router = express.Router();

router.post("/create", CreateCanvas);
router.get("/get", GetCanvas);

module.exports = router;
