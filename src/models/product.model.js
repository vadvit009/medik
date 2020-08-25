const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
    title: String,
    desc: String,
    price: Number,
    salePrice: Number,
    attr: Array,
    attrOptions: Array,
    categoryID: { type: mongoose.ObjectId, ref: "Category" },
    vendorID: { type: mongoose.ObjectId, ref: "Vendor" },
    reviews: [{ type: mongoose.ObjectId, ref: "Review" }],
    recommended: Boolean,
    visibility: Boolean,
    quantity: Number,
    article: String,
    gallery: Array,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
});

module.exports = mongoose.model("Product", Product, "products");