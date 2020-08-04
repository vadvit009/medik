const mongoose = require("mongoose");

const Attr = new mongoose.Schema(
  {
    name: String,
    deletedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attr", Attr, "attr");
