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
    if (!fs.existsSync(userFolderPath + "/" + req.body.id)) {
      fs.mkdirSync(userFolderPath + "/" + req.body.id);
    } else {
      fs.rmdirSync(userFolderPath + "/" + req.body.id, { recursive: true });
      fs.mkdirSync(userFolderPath + "/" + req.body.id);
    }
    cb(null, userFolderPath + "/" + req.body.id);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const userUpload = multer({ storage: userStorage });

module.exports = {
  mainImgUpload: (req, res) => {
    const { id } = req.params;
    const defaultPath = "https://medtechnika.te.ua/assets/products/";

    upload.single("thumbnail")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      // return res.status(200).send(req.file);
      const smallImg = defaultPath + id + '/' + req.file.originalname;
      Product.findByIdAndUpdate(id, { thumbnail: smallImg })
        .then(thumbnail => res.send(thumbnail))
        .catch(err => {
          console.log("ERROR WHEN UPDATE === ", err);
          return res.sendStatus(400)
        })
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
      console.log("FILES === ", req.files);
      // const arrayWebp = req.files.map(img => {
      //   sharp(img.path)
      //     .toFormat("webp")
      //     .toFile(img.destination + "/" + img.originalname.split(".")[0] + '.webp')
      //     .then(ok => console.log(ok))
      // })
      // console.log("ARRAY WEBP === ", arrayWebp);
      const galleryArray = req.files.map(image => defaultPath + id + '/' + image.originalname);
      console.log("GALLERY ARRAY === ", galleryArray);

      Product.findByIdAndUpdate(id, {
        gallery: galleryArray
      })
        .then((upload) => {
          res.sendStatus(200)
          console.log("UPDATE GALLERY IN PRODUCT === ", upload);
        })
        .catch((err) => {
          console.log("ERROR WHILE UPDATING PRODUCT-GALLERY === ", err);
        })
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
    });
  },
};
