const app = require("express").Router();
const {
    mainImgUpload,
    galleryUpload,
    userUpload
} = require("../controllers/upload.controller");

const { verifyAdminToken, verifyUserToken } = require("../middleware/jwtAuth");

app.post("/product/:id/thumbnail", verifyAdminToken, mainImgUpload);

app.post("/product/:id/gallery", verifyAdminToken, galleryUpload);

app.post("/user/avatar", verifyUserToken, userUpload);

module.exports = app;