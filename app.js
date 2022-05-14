const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST , PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type , Authorization");
  next();
});
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ err: err.message });
});
//    "mongodb+srv://admin:SZU4VZBeqlx7uEaA@cluster0.w3g9c.mongodb.net/DApp?retryWrites=true&w=majority"
mongoose
  .connect(
    "mongodb+srv://sampath:DB123@cluster0.b1kws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  )
  .then((response) => {
    console.log("Connected to mongodb..", response);
    app.listen(9000, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
