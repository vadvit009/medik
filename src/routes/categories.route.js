const app = require("express").Router();

const {
    // getAllCategories,
    getAllLookupCategoies,
    createCategory,
    deleteCategory,
} = require("../controllers/categories.controller");

const { verifyAdminToken } = require('../middleware/jwtAuth');

const { cache } = require('../cache/cache.util');

// app.get("/lookup", getAllCategories);

app.get("/categories", /*cache(3600),*/ getAllLookupCategoies);

app.post("/category",/* verifyAdminToken, */createCategory);

app.delete("/category/:id", verifyAdminToken, deleteCategory);

module.exports = app;
