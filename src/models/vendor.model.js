const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vendor = new Schema({
  title: String,
  desc: String,
  deletedAt: Date,
},
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", Vendor, "vendors");
