const mongoose = require("mongoose");

const News = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("News", News, "news");
