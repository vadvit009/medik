const { News } = require("../models");
const path = require('path');

const getAllNews = async (req, res) => {
  const { skip } = req.query;
  return await News.find()
    .skip(skip ? (skip - 1) * 3 : 0)
    .limit(3)
    .sort({ createdAt: -1 })
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getNew = async (req, res) => {
  const { id } = req.params;
  return await News.findById(id).exec((err, singleNew) => {
    if (err) return res.send(err);
    res.send(singleNew);
  });
};

const createNew = (req, res, next) => {
  const {
    title,
    desc,
    gallery
  } = req.body;
  return News.create({
    title,
    desc,
    gallery,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleNew) => {
      console.log(singleNew);
      req.body.id = singleNew._id
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
    .finally(next)
};

const deleteNew = async (req, res) => {
  const { id } = req.body;
  return await News.findByIdAndDelete(id).exec((err, deletedNew) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

const uploadPhoto = () => {

  const multer = require('multer');
  const folderPath = path.resolve(__dirname, "../../build/assets/news/");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync(folderPath + "/" + req.params.id)) {
        fs.mkdirSync(folderPath + "/" + req.params.id);
      } else {
        fs.rmdirSync(folderPath + "/" + req.params.id, { recursive: true });
        fs.mkdirSync(folderPath + "/" + req.params.id);
      }
      cb(null, folderPath + "/" + req.params.id);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  upload.single("gallery")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
}

module.exports = { getAllNews, getNew, createNew, deleteNew, uploadPhoto };
