const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:SZU4VZBeqlx7uEaA@cluster0.w3g9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((response) => {
    console.log("Connected to mongodb..");
    app.listen(5000, () => {
      console.log("Server started at 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
