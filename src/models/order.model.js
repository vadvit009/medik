const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userID: { type: mongoose.ObjectId, ref: "users" },
  products: Array,
  sum: Number,
  status: String,
  deliveryCity:String,
  deliveryStreet:String,
  deliveryHouse:String,
  deliveryApartament:String,
  deliveryWarehouse:String,
  paymentType: String, 
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

const Order = mongoose.model("Order", OrderSchema, "orders");

module.exports = Order;
