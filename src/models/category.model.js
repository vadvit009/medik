const mongoose = require("mongoose");

const Category = new mongoose.Schema({
  parentID: String,
  subParentID: String,
  title: String,
  desc: String,
  gallery: Array,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Category", Category, "category");
