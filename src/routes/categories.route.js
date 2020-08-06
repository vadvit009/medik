const app = require("express").Router();

const {
  getAllCategories,
  getAllLookupCategoies,
  createCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

app.get("/lookup", getAllCategories);

app.get("/categories", getAllLookupCategoies);

app.post("/category", createCategory);

app.delete("/category/:id", deleteCategory);

module.exports = app;
