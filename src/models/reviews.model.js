const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  userID: { type: mongoose.ObjectId, ref: "users" },
  productID: { type: mongoose.ObjectId, ref: "Product" },
  title: String,
  desc: String,
  rating: Number,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

const Review = mongoose.model("Review", ReviewSchema, "reviews");

module.exports = Review;
