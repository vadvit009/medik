const mongoose = require("mongoose");

const User = new mongoose.Schema({
  fName: String,
  lName: String,
  fatherName: String,
  email: String,
  phone: Number,
  password: String,
  address: String,
  gallery: Array,
  role: Boolean,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("users", User, "users");
