const imgbbUploader = require("imgbb-uploader");
const express = require("express");

const router = express.Router();

router.post("/uploadImage", (req, res) => {
  try {
    const image = req.body.image;
    if (!image) {
      return res
        .status(400)
        .json({ error: "Please enter all fields", success: false });
    }
    const options = {
      apiKey: process.env.IMGBB_API_KEY,
      base64string: image,
    };
    imgbbUploader(options)
      .then((response) => {
        console.log(response);
        res.status(200).json({
          success: false,
          message: "Image uploaded successfully",
          link: response?.display_url,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Image upload failed",
        });
      });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
