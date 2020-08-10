const app = require("express").Router();
const {
  mainImgUpload,
  galleryUpload, userUpload
} = require("../controllers/upload.controller");

const { verifyAdminToken, verifyUserToken } = require("../middleware/jwtAuth");

app.post("/product/:id/upload", verifyAdminToken, mainImgUpload);

app.post("/product/:id/gallery", verifyAdminToken, galleryUpload);

app.post("/user/:id/avatar", verifyUserToken, userUpload);

module.exports = app;
