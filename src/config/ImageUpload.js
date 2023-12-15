const { default: axios } = require("axios");

const pdfUploaderFunc = async (req, res) => {
  req.body["upload_preset"] = process.env.CLOUDINARY_UPLOAD_PRESET;
  console.log(process.env.CLOUDINARY_KEY_NAME);
  let url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_KEY_NAME}/upload`;
  // compress image
  try {
    const response = await axios.post(url, req.body);
    res.status(200).json({
      error: false,
      url: response.data.url,
      secure_url: response.data.secure_url,
      message: "uploaded successfully",
    });
  } catch (err) {
    console.log(err.response.data);
    res.status(200).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = pdfUploaderFunc;
