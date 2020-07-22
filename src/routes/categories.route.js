const app = require("express").Router();

const { getAllCategories, getAllLookupCategoies } = require("../controllers/categories.controller");

app.get("/lookup", getAllCategories);

app.get("/categories", getAllLookupCategoies);

module.exports = app;
