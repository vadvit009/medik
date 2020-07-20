const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vendor = new Schema({
  title: String,
  desc: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Vendor", Vendor, "vendors");
