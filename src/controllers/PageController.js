const PageModel = require("../models/PageModel");

exports.CreatePage = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.slug ||
      !req.body.banner ||
      !req.body.description
    ) {
      return res.status(400).json({ error: "Please enter all fields" });
    }
    const bodyData = {
      title: req.body.title,
      slug: req.body.slug,
      banner: req.body.banner,
      description: req.body.description,
      icons: req.body.icons,
    };
    const newPage = new PageModel(bodyData);
    await newPage.save();
    res.status(200).json({ success: true, data: newPage });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.GetPage = async (req, res) => {
  try {
    const page = await PageModel.find();
    res.status(200).json({ success: true, data: page });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
