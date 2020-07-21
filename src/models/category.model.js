const mongoose = require("mongoose");

const Category = new mongoose.Schema({
  parentID: { type: mongoose.Types.ObjectId, ref: "Category" },
  subParentID: { type: mongoose.Types.ObjectId, ref: "Category" },
  title: String,
  desc: String,
  gallery: Array,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Category", Category, "category");
