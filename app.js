const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);

// const Web3 = require("web3");
// const web3 = new Web3("http://localhost:7545");
// web3.eth.getAccounts(function (error, result) {
//   console.log(result);
// });

mongoose
  .connect(
    "mongodb+srv://admin:SZU4VZBeqlx7uEaA@cluster0.w3g9c.mongodb.net/DApp?retryWrites=true&w=majority"
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
