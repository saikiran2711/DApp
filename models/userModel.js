const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
