const multer = require("multer");
const fs = require("fs");
const path = require("path");
const folderPath = path.resolve(__dirname, "../../build/assets/products/");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(folderPath + "/" + req.params.id)) {
      fs.mkdirSync(folderPath + "/" + req.params.id);
    }
    cb(null, folderPath + "/" + req.params.id);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = {
  mainImgUpload: (req, res) => {
    upload.single("file")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(req.file);
    });
  },

  galleryUpload: (req, res) => {
    upload.array("gallery", 10)(req, res, function (err) {
      console.log("err", err);
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      return res.sendStatus(200);
    });
  },

  userUpload: (req, res) => {
    upload.single("avatar")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      return res.sendStatus(200);
    });
  },
};
