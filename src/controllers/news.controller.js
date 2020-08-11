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

const createNew = (req, res) => {
  const {
    title,
    desc,
    gallery,
  } = req.body;
  return News.create({
    title,
    desc,
    gallery,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  }).then((singleNew) => {
    res.send(singleNew);
  }).catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteNew = async (req, res) => {
  const { id } = req.body;
  return await News.findByIdAndDelete(id).exec((err, deletedNew) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = { getAllNews, getNew, createNew, deleteNew };
