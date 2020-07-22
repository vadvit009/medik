const app = require("express").Router();

const {
  getAllNews,
  getNew,
  createNew,
  deleteNew,
} = require("../controllers/news.controller");

app.get("/news", getAllNews);

app.get("/new/:id", getNew);

app.post("/new/:id", createNew);

app.delete("/new/:id", deleteNew);

module.exports = app;
