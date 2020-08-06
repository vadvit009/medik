const { Category } = require("../models");

const getAllCategories = async (req, res) => {
  return await Category.find()
    .populate({
      path: "parentID",
      select: "title",
    })
    .populate({
      path: "subParentID",
      select: "title",
    })
    .exec((err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
};

const getAllLookupCategoies = async (req, res) => {
  return await Category.aggregate([
    {
      $lookup: {
        from: "category",
        localField: "parentID",
        foreignField: "_id",
        as: "parent",
      },
    },
    {
      $lookup: {
        from: "category",
        localField: "subParentID",
        foreignField: "_id",
        as: "sub",
      },
    },
    {
      $project: {
        parent: 1,
        sub: 1,
        title: 1,
      },
    },
  ]).exec((err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
};

const createCategory = async (req, res) => {
  const { parentID, subParentID, title, desc, gallery } = req.body;
  return await Category.create({
    parentID,
    subParentID,
    title,
    desc,
    gallery,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null,
  });
};

module.exports = {
  getAllCategories,
  getAllLookupCategoies,
  createCategory,
};
