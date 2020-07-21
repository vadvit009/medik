const { Product } = require("../models");
const { ObjectId } = require("mongoose").Types;

const getAllProducts = async (req, res) => {
  const { search, page } = req.query;
  console.log("SEARCH === " + search + " PAGE === " + page);

  const length = await Product.countDocuments().then((length) => length);

  return await Product.aggregate([
    {
      $lookup: {
        from: "category",
        localField: "categoryID",
        foreignField: "_id",
        as: "categories",
      },
    },
  ])
    .skip(page > 1 ? (page - 1) * 24 : 0)
    .limit(page ? page * 24 : 24)
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
    .catch((err) => res.send({ err: true, errorMsg: err }));
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findById(ObjectId(id))
    .populate("categoryID", "parentID subParentID title desc -_id")
    .populate("vendorID", "title -_id")
    .populate({
      path: "reviews",
      select: "title desc userID -_id",
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
    .catch((err) => console.log(err));
};

const softDeleteProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findOneAndUpdate(
    { _id: ObjectId(id) },
    { deletedAt: Date.now() }
  )
    .then((product) => {
      const bearerToken = req.headers.authorization;
      if (bearerToken) {
        const token = bearerToken.split(" ")[1];
        jwt.verify(token, process.env.SECRET_ADMIN, (err, productId) => {
          console.log("err = ", err);
          if (err) return res.sendStatus(403);
          res.json(product);
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => console.log(err));
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
