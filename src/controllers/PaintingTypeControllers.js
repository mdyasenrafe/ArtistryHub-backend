const PaintingModel = require("../models/PaintingModel");

exports.CreatePaintings = async (req, res) => {
  try {
    const { label, value } = req.body;
    if (!label || !value) {
      return res.status(400).json({ error: "Please enter all fields" });
    }
    const bodyData = {
      label: label,
      value: value,
    };
    const newCanvas = new PaintingModel(bodyData);
    await newCanvas.save();
    res.status(200).json({ success: true, data: newCanvas });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.GetPaintings = async (req, res) => {
  try {
    const paintings = await PaintingModel.find();
    res.status(200).json({ success: true, data: paintings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
