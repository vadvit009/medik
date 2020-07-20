const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  salePrice: Number,
  attr: Array,
  attrOptions: Array,
  categoryID: mongoose.ObjectId,
  vendorID: mongoose.ObjectId,
  recommended: Boolean,
  visibility: Boolean,
  quantity: Number,
  article: String,
  gallery: Array,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Product", Product, "products");
