const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userID: mongoose.ObjectId,
  products: mongoose.ObjectId,
  sum: Number,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

const Order = mongoose.model("Order", OrderSchema, "orders");

module.exports = Order;
