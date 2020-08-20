const mongoose = require("mongoose");

const Contact = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    message: String,
    read: Boolean,
    deletedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", Contact, "contactUs");
