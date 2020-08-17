const mongoose = require("mongoose");

const User = new mongoose.Schema({
  fName: String,
  lName: String,
  fatherName: String,
  email: String,
  phone: Number,
  password: String,
  address: String,
  gallery: String,
  role: Boolean,
  facebookID: String,
  googleID: String,
  deliveryCity: String,
  deliveryStreet: String,
  deliveryHouse: String,
  deliveryApartament: String,
  deliveryWarehouse: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("users", User, "users");
