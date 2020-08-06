const app = require("express").Router();

const {
  getAllCategories,
  getAllLookupCategoies,
  createCategory,
} = require("../controllers/categories.controller");

app.get("/lookup", getAllCategories);

app.get("/categories", getAllLookupCategoies);

app.post("/category", createCategory);

module.exports = app;
