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
      uniqueId: req.body.uniqueId,
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
    const { uniqueId } = req.query;

    const orders = await OrderModel.find({ uniqueId });
    console.log("orders", orders);
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
