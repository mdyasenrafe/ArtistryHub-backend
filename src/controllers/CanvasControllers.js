const CanvasModel = require("../models/CanvasModel");

exports.CreateCanvas = async (req, res) => {
  try {
    const { label, value } = req.body;
    if (!label || !value) {
      return res.status(400).json({ error: "Please enter all fields" });
    }
    const bodyData = {
      label: label,
      value: value,
    };
    const newCanvas = new CanvasModel(bodyData);
    await newCanvas.save();
    res.status(200).json({ success: true, data: newCanvas });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.GetCanvas = async (req, res) => {
  try {
    const canvas = await CanvasModel.find();
    res.status(200).json({ success: true, data: canvas });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
