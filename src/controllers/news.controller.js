const { News } = require("../models");

const getAllNews = async (req, res) => {
  return await News.find().exec((err, news) => {
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

const createNew = async (req, res) => {
  const {} = req.body;
  return await News.create().exec((err, singleNew) => {
    if (err) return res.send(err);
    res.send(singleNew);
  });
};

const deleteNew = async (req, res) => {
  const { id } = req.body;
  return await News.findByIdAndDelete(id).exec((err, deletedNew) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = { getAllNews, getNew, createNew, deleteNew };
