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

const { cache } = require('../cache/cache.util');

app.get("/news", cache(3600), getAllNews);

app.get("/new/:id", getNew);

app.post("/new", verifyAdminToken, createNew);

app.patch("/new/:id", updateNew);

app.post("/new/upload/:id", verifyAdminToken, uploadPhoto);

app.delete("/new/:id", verifyAdminToken, deleteNew);

module.exports = app;