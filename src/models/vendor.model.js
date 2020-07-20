const mongoose = require("mongoose");

const Vendor = new mongoose.Schema({
  title: String,
  desc: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Vendor", Vendor, "vendors");
