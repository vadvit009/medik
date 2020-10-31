const app = require("express").Router();

const {
    // getAllCategories,
    getAllLookupCategoies,
    createCategory,
    deleteCategory,
    patchCategory,
    uploadPhoto
} = require("../controllers/categories.controller");

const {verifyAdminToken} = require('../middleware/jwtAuth');

const {cache} = require('../cache/cache.util');

// app.get("/lookup", getAllCategories);

app.get("/categories", /*cache(3600),*/ getAllLookupCategoies);

app.post("/category", verifyAdminToken, createCategory);

app.post("/category/upload/:id", verifyAdminToken, uploadPhoto);

app.patch("/category/:id", verifyAdminToken, patchCategory);

app.delete("/category/:id", verifyAdminToken, deleteCategory);

module.exports = app;
