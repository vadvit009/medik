const app = require("express").Router();

const {
  // getAllCategories,
  getAllLookupCategoies,
  createCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

const { verifyAdminToken } = require('../middleware/jwtAuth');

// app.get("/lookup", getAllCategories);

app.get("/categories", getAllLookupCategoies);

app.post("/category", verifyAdminToken, createCategory);

app.delete("/category/:id", verifyAdminToken, deleteCategory);

module.exports = app;
