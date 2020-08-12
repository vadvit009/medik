const { News } = require("../models");

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
  console.log('REQ === ', req.body);
  console.log('REQ.FIELDS === ', req.file);
  const {
    title,
    desc,
  } = req.body;
  const defaultUrl = "https://medtechnika.te.ua/assets/news/";
  return News.create({
    title,
    desc,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleNew) => {
      console.log("CREATED NEWS === ", singleNew);
      req.body.id = singleNew._id
      req.body.url = defaultUrl
      res.sendStatus(200)
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

const uploadPhoto = (req, res) => {
  console.log('REQ.BODY === ', req.body);

  (req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
}

module.exports = { getAllNews, getNew, createNew, deleteNew, uploadPhoto };
