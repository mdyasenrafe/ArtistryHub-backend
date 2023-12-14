const OrderModel = require("../models/OrderModel");

exports.PostOrder = async (req, res) => {
  try {
    if (
      !req.body.canvas ||
      !req.body.painting ||
      !req.body.image ||
      !req.body.deliveryDate
    ) {
      return res.status(400).json({ error: "Please enter all fields" });
    }
    const bodyData = {
      canvas: req.body.canvas,
      painting: req.body.painting,
      image: req.body.image,
      deliveryDate: req.body.deliveryDate,
      ip: req.body?.ip,
    };
    const newOrder = new OrderModel(bodyData);
    await newOrder.save();
    res.status(200).json({
      success: true,
      data: newOrder,
      message: "Order Placed Successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.GetOrders = async (req, res) => {
  try {
    const { ip } = req.query;
    const orders = await OrderModel.find({ ip: ip });
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
