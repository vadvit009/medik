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

  if (category) {
    Product.aggregate([
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
    ])
      .sort(sortBy())
      .skip(page > 1 ? (page - 1) * 24 : 0)
      .limit(page ? page * 24 : 24)
      .exec((err, products) => {
        if (err) {
          res.sendStatus(400);
          return console.log(err);
        }
        res.send({ products, length });
      })
  };

  if (search) {
    console.log("SEARCH_ARRAY === ", [search]);
    Product.aggregate([
      {
        $match: {
          title: { $in: [search] }
          // $text: {
          //   $search: search,
          //   $caseSensitive: false,
          //   $diacriticSensitive: false
          // },
        }
      },
      {
        $lookup: {
          from: "category",
          localField: "categoryID",
          foreignField: "_id",
          as: "categories",
        },
      },
    ])
      .sort(sortBy())
      .skip(page > 1 ? (page - 1) * 24 : 0)
      .limit(page ? page * 24 : 24)
      .then((products) => {
        res.send({ products, length });
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(400);
      });
  } else {
    Product.aggregate([
      {
        $lookup: {
          from: "category",
          localField: "categoryID",
          foreignField: "_id",
          as: "categories",
        },
      }
    ])
      .sort(sortBy())
      .skip(page > 1 ? (page - 1) * 24 : 0)
      .limit(page ? page * 24 : 24)
      .then((products) => {
        res.send({ products, length });
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(400);
      });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findById(id)
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

const updateProduct = (req, res) => {
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
  return Product.findByIdAndUpdate(id, {
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
  return await Product.findByIdAndUpdate(id,
    { deletedAt: null }
  )
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.sendStatus(400);
      console.log("err === ", err)
    });
};

const softDeleteProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findByIdAndUpdate(id,
    { deletedAt: Date.now() }
  )
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log("err === ", err));
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  return await Product.findByIdAndDelete(id).then((product) => {
    res.json(product);
  });
};

const getProductHighScore = (req, res) => {
  return Product.aggregate([
    {
      $lookup: {
        from: "reviews",
        localField: "reviews",
        foreignField: "_id",
        as: "reviews"
      },
    },
    {
      $match: {
        "reviews.rating": { $gte: 4 }
      }
    }
  ])
    .then(products => res.send(products))
    .catch(err => {
      console.log(err);
      res.sendStatus(400)
    }
    )
};

const getProductByArrayOfIds = (req, res) => {
  const { productsArray } = req.query;
  const productsArrayObjectIds = (productsArray && productsArray.split(",").map(product => ObjectId(product))) || [];

  return Product.find({
    _id: {
      $in: productsArrayObjectIds
    }
  }).then(products => res.send(products))
    .catch(err => {
      console.log("ERROR WHEN GET_PRODUCTS_BY_ID === ", err);
      res.sendStatus(400)
    })
}

module.exports = {
  getProductHighScore,
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  softDeleteProduct,
  restoreProduct,
  updateProduct,
  getProductByArrayOfIds
};
