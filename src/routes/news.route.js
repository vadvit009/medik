const app = require("express").Router();

const {
  getAllNews,
  getNew,
  createNew,
  deleteNew,
  uploadPhoto,
  updateNew
} = require("../controllers/news.controller");

const { verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/news", getAllNews);

app.get("/new/:id", getNew);

app.post("/new", verifyAdminToken, createNew);

app.patch("/new/:id", updateNew);

app.post("/new/upload/:id", verifyAdminToken, uploadPhoto);

app.delete("/new/:id", verifyAdminToken, deleteNew);

module.exports = app;
