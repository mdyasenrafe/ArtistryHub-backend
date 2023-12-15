const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icons: {
    type: Array,
  },
});

const PageModel = mongoose.model("pages", PageSchema);
module.exports = PageModel;
