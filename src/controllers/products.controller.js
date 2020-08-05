const { Product } = require("../models");
const { ObjectId } = require("mongoose").Types;

const getAllProducts = async (req, res) => {
  const { search, page, category, sort } = req.query;
  const sortBy = () => {
    if (sort === undefined) return { title: -1 };
    if (sort === "recommended") return { recommended: -1 };
    if (sort === "priceMinus") return { price: 1 };
    if (sort === "price") return { price: -1 };
  };
  console.log("SEARCH === " + search + " PAGE === " + page);
  console.log("CATEGORY === " + category);

  const categoryArrayObjectIds =
    (category && category.split(",").map((id) => ObjectId(id))) || [];

  const length = await Product.countDocuments().then((length) => length);

  category
    ? await Product.aggregate([
        {
          $lookup: {
            from: "category",
            localField: "categoryID",
            foreignField: "_id",
            as: "categories",
          },
        },
        {
          $match: {
            $and: [
              {
                $or: [
                  {
                    "categories.parentID": { $in: categoryArrayObjectIds },
                  },
                  {
                    "categories.subParentID": { $in: categoryArrayObjectIds },
                  },
                  {
                    "categories._id": { $in: categoryArrayObjectIds },
                  },
                ],
              },
            ],
          },
        },
        {
          $project: {
            desc: 0,
          },
        },
      ])
        .skip(page > 1 ? (page - 1) * 24 : 0)
        .limit(page ? page * 24 : 24)
        .sort(sortBy())
        .exec((err, result) => {
          if (err) {
            res.sendStatus(400);
            return console.log(err);
          }
          res.send(result);
        })
    : await Product.aggregate([
        {
          $lookup: {
            from: "category",
            localField: "categoryID",
            foreignField: "_id",
            as: "categories",
          },
        },
        {
          $project: {
            desc: 0,
          },
        },
        {
          $sort: sortBy(),
        },
      ])
        .skip(page > 1 ? (page - 1) * 24 : 0)
        .limit(page ? page * 24 : 24)
        .sort(sortBy())
        .then((products) => {
          search
            ? res.send(
                products.filter((product) =>
                  product.title.toLowerCase().includes(search.toLowerCase()) ||
                  product.desc.toLowerCase().includes(search.toLowerCase())
                    ? product
                    : null
                )
              )
            : res.send({ products, length });
        })
        .catch((err) => console.log(err));
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findById(ObjectId(id))
    .populate("vendorID", "title -_id")
    .populate({
      path: "categoryID",
      select: "subParentID title desc",
      populate: {
        path: "subParentID",
        select: "title",
        populate: {
          path: "parentID",
          select: "title",
        },
      },
    })
    .populate({
      path: "reviews",
      select: "title desc rating userID -_id",
      populate: { path: "userID", select: "fName -_id" },
    })
    .exec((err, prod) => {
      if (err) return res.send(err);
      res.send(prod);
    });
};

const createProduct = async (req, res) => {
  const {
    title,
    desc,
    price,
    salePrice,
    attr,
    attrOptions,
    categoryID,
    vendorID,
    recommended,
    visibility,
    quantity,
    reviews,
    article,
    gallery,
  } = req.body;
  return await Product.create({
    title,
    desc,
    price,
    salePrice,
    attr,
    attrOptions,
    reviews,
    categoryID,
    vendorID,
    recommended,
    visibility,
    quantity,
    article,
    gallery,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.send({ error: true, errMsg: err }));
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    desc,
    price,
    salePrice,
    attr,
    categoryID,
    vendorID,
    recommended,
    visibility,
    quantity,
    article,
    gallery,
  } = req.body;
  return await Product.findByIdAndUpdate(ObjectId(id), {
    title,
    desc,
    price,
    salePrice,
    attr,
    categoryID,
    vendorID,
    recommended,
    visibility,
    quantity,
    article,
    gallery,
    updatedAt: Date.now(),
    deletedAt: null,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.send({ error: true, errMsg: err }));
};

const restoreProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findOneAndUpdate(
    { _id: ObjectId(id) },
    { deletedAt: null }
  )
    .then((product) => {
      const bearerToken = req.headers.authorization;
      if (bearerToken) {
        const token = bearerToken.split(" ")[1];
        jwt.verify(token, process.env.SECRET_ADMIN, (err, productId) => {
          console.log("err = ", err);
          if (err) return res.sendStatus(403);
          // next();
          res.json(product);
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => console.log("err === ", err));
};

const softDeleteProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findOneAndUpdate(
    { _id: ObjectId(id) },
    { deletedAt: Date.now() }
  )
    .then((product) => {
      // const bearerToken = req.headers.authorization;
      // if (bearerToken) {
      //   const token = bearerToken.split(" ")[1];
      //   jwt.verify(token, process.env.SECRET_ADMIN, (err, productId) => {
      //     console.log("err = ", err);
      //     if (err) return res.sendStatus(403);
      res.json(product);
      //   });
      // } else {
      //   res.sendStatus(401);
      // }
    })
    .catch((err) => console.log("err === ", err));
  // res.json({ isAdmin: false });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findByIdAndDelete({ _id: id }).then((product) => {
    res.json(product);
  });
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  softDeleteProduct,
  restoreProduct,
  updateProduct,
};
