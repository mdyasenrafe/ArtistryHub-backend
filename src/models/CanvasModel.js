const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CanvasSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const CanvasModel = mongoose.model("canvas", CanvasSchema);
module.exports = CanvasModel;
