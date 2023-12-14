const express = require("express");
const { PostOrder, GetOrders } = require("../controllers/OrderController");
const router = express.Router();

router.post("/create", PostOrder);
router.get("/get", GetOrders);

module.exports = router;
