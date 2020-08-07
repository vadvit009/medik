const app = require("express").Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  restoreProduct,
  softDeleteProduct,
  getProductHighScore,
  deleteProduct,
} = require("../controllers/products.controller");

const { verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/products", getAllProducts);

app.post("/product", verifyAdminToken, createProduct);

app.get("/product/:id", getProduct);

app.get("/products/highRating", getProductHighScore);

app.patch("/product/:id", verifyAdminToken, updateProduct);

app.delete("/product/:id", verifyAdminToken, deleteProduct);

app.patch("/product/restore/:id", verifyAdminToken, restoreProduct);

app.patch("/product/soft-delete/:id", verifyAdminToken, softDeleteProduct);

module.exports = app;
