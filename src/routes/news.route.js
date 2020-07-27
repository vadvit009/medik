const app = require("express").Router();

const {
  getAllNews,
  getNew,
  createNew,
  deleteNew,
} = require("../controllers/news.controller");

const { verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/news", getAllNews);

app.get("/new/:id", getNew);

app.post("/new/:id", verifyAdminToken, createNew);

app.delete("/new/:id", verifyAdminToken, deleteNew);

module.exports = app;
