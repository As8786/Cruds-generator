const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  description: {
    type: String,
    require: true,
    trim: true
  },
  price: {
    type: Number,
    require: true
  }
});

let product = mongoose.model("Products", productSchema);

module.exports = { product };
