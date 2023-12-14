const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  canvas: {
    type: String,
    required: true,
  },
  painting: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
});

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;
