const { Product } = require("../models");
const ObjectId = require("mongoose").Types.ObjectId;

const getAllProducts = async (req, res) => {
  const { search, page } = req.query;
  console.log("SEARCH === " + search + " PAGE === " + page);

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
    .limit(page ? page * 25 : 25)
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
        : res.json(products);
    })
    .catch((err) => res.send({ err: true, errorMsg: err }));
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  return Product.aggregate([
    {
      $lookup: {
        from: "category",
        localField: "categoryID",
        foreignField: "_id",
        as: "categories",
      },
    },
    {
      $match: { _id: ObjectId(id) },
    },
  ])
    .then((product) => res.json(product))
    .catch((err) => res.send({ err: true, errorMsg: err }));
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
  return await Product.findByIdAndUpdate(id, {
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
  if (req.session.loggedIn) {
    const { id } = req.params;
    return await Product.update(
      { deletedAt: null },
      { where: { productId: id } }
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
  } else {
    res.json({ isAdmin: false });
  }
};

const softDeleteProduct = async (req, res) => {
    const { id } = req.params;
    return await Product.update(
      { deletedAt: "now()" },
      { where: { productId: id } }
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
    // res.json({ isAdmin: false });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.destroy({ where: { productId: id } }).then((product) => {
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
