const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ err: err.message });
});

mongoose
  .connect(
    "mongodb+srv://admin:SZU4VZBeqlx7uEaA@cluster0.w3g9c.mongodb.net/DApp?retryWrites=true&w=majority"
  )
  .then((response) => {
    console.log("Connected to mongodb..", response);
    app.listen(9000, () => {
      console.log("Server started at 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
