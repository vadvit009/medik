const multer = require("multer");
const fs = require("fs");
const path = require("path");
const folderPath = path.resolve(__dirname, "../../build/assets/products/");
const userFolderPath = path.resolve(__dirname, "../../build/assets/users");
const { User, Product } = require("../models");

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

const userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(userFolderPath + "/" + req.params.id)) {
      fs.mkdirSync(userFolderPath + "/" + req.params.id);
    } else {
      fs.rmdirSync(userFolderPath + "/" + req.params.id, { recursive: true });
      fs.mkdirSync(userFolderPath + "/" + req.params.id);
    }
    cb(null, userFolderPath + "/" + req.params.id);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const userUpload = multer({ storage: userStorage });

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
    const { id } = req.params;
    const defaultPath = "https://medtechnika.te.ua/assets/products/";
    
    upload.array("gallery", 10)(req, res, function (err) {
      console.log("ERROR UPLOAD === ", err);
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      console.log("FILES === ", req.file);
      Product.findByIdAndUpdate(id, {
        gallery: defaultPath + id + "/" + req.file.originalname,
      })
        .then((upload) => {
          res.sendStatus(200);
          console.log(upload);
        })
        .catch((err) => {
          res.sendStatus(400);
          console.log(err);
        });
      return res.sendStatus(200);
    });
  },

  userUpload: (req, res) => {
    console.log("ID === ", req.body.id);
    const { id } = req.body;
    const defaultPath = "https://medtechnika.te.ua/assets/users/";

    userUpload.single("avatar")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      User.findByIdAndUpdate(id, {
        gallery: defaultPath + id + "/" + req.file.originalname,
      })
        .then((upload) => {
          res.sendStatus(200);
          console.log(upload);
        })
        .catch((err) => {
          res.sendStatus(400);
          console.log(err);
        });
      return res.sendStatus(200);
    });
  },
};
