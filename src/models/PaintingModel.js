const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaintingSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const PaintingModel = mongoose.model("paintings", PaintingSchema);
module.exports = PaintingModel;
