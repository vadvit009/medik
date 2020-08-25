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
    getProductByArrayOfIds
} = require("../controllers/products.controller");

const { cache } = require('../cache/cache.util');

const { verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/products", cache(3600), getAllProducts);

app.post("/product", verifyAdminToken, createProduct);

app.get("/product/:id", cache(3600), getProduct);

app.get("/exact", cache(3600), getProductByArrayOfIds);

app.get("/products/highRating", cache(3600), getProductHighScore);

app.patch("/product/:id", verifyAdminToken, updateProduct);

app.delete("/product/:id", verifyAdminToken, deleteProduct);

app.patch("/product/restore/:id", verifyAdminToken, restoreProduct);

app.patch("/product/soft-delete/:id", verifyAdminToken, softDeleteProduct);

module.exports = app;