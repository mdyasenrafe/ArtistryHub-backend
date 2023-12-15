const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//file
const CanvasRoute = require("./src/routes/CanvasRoute");
const PaintingRoute = require("./src/routes/PaintingRoute");
const ImageUploadRoute = require("./src/config/ImageUpload");
const OrderRoute = require("./src/routes/OrderRoute");
const PageRoute = require("./src/routes/PageRoute");

require("dotenv").config();

const port = process.env.PORT || 8080;

// file call
const app = express();

const http = require("http").Server(app);

// middle wares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// model connect
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5iwe9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then(() => {
    console.log("Mongodb connected....");
  })
  .catch((err) => console.log(err.message));

app.use("/api/canvas", CanvasRoute);
app.use("/api/painting", PaintingRoute);
app.use("/api/order", OrderRoute);
app.use("/api/page", PageRoute);

app.use("/api", ImageUploadRoute);

// cors erorr
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("This is Artistry Hub Server");
});

app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: 404, error: true, message: "Not Found this route" });
});

//   test
http.listen(port, () => {
  console.log("sucessfully run by", port);
  ``;
});
