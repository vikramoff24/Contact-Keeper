const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  //Create relationship - Becoz each user has Seperate list of contact
  user: {
    type: mongoose.Schema.Types.ObjectId, //id type
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: "personal",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", contactSchema);
