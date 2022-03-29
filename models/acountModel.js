const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accIndexSchema = new Schema({
  accIndex: {
    type: Number,
  },
  id: {
    type: Number,
  },
});

module.exports = mongoose.model("Index", accIndexSchema);
