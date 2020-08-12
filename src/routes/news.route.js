const app = require("express").Router();

const {
  getAllNews,
  getNew,
  createNew,
  deleteNew,
  uploadPhoto
} = require("../controllers/news.controller");

const { verifyAdminToken } = require("../middleware/jwtAuth");

const path = require('path');
const fs = require('fs');

const multer = require('multer');
const folderPath = path.resolve(__dirname, "../../build/assets/news/");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('REQ.BODY.ID === ', req.body.id);
    if (!fs.existsSync(folderPath + "/" + req.body.id)) {
      fs.mkdirSync(folderPath + "/" + req.body.id);
    } else {
      fs.rmdirSync(folderPath + "/" + req.body.id, { recursive: true });
      fs.mkdirSync(folderPath + "/" + req.body.id);
    }
    cb(null, folderPath + "/" + req.body.id);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).any();

app.get("/news", getAllNews);

app.get("/new/:id", getNew);

app.post("/new", verifyAdminToken, upload, createNew, uploadPhoto);

app.delete("/new/:id", verifyAdminToken, deleteNew);

module.exports = app;
