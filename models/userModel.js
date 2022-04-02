const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  rollNo: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  isLoggedIn: {
    type: Boolean,
  },
  role: {
    type: String,
    default: "Student",
  },
});

module.exports = mongoose.model("User", userSchema);
