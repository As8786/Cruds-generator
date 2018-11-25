const mongoose = require("mongoose");

let contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  telephone: {
    type: Number,
    require: true
  }
});

let contact = mongoose.model("Contacts", contactSchema);

module.exports = { contact };
