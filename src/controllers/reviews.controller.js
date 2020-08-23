const { Review, Product } = require("../models");
const ObjectId = require("mongoose").Types.ObjectId;

const getAllReviews = async (req, res) => {
  return await Review.aggregate([
    {
      $lookup: {
        from: "users",
        let: { user: "$userID" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$user"],
              },
            },
          },
          {
            $project: {
              _id: 0,
              fName: 1,
            },
          },
        ],
        as: "user",
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        review: 1,
        user: 1,
        product: 1,
        accepted: 1,
      },
    },
  ])
    // .skip(page ? 0 : page * 25)
    // .limit(page ? page * 25 : 25)
    .then((review) => {
      res.send({ review });
    })
    .catch((err) => res.send({ err: true, errorMsg: err }));
};

const getReview = async (req, res) => {
  const { id } = req.params;
  return Review.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $match: { _id: ObjectId(id) },
    },
  ])
    .then((review) => res.json(review))
    .catch((err) => {
      console.log("ERROR WHEN GETTING REVIEW === ", err);
      res.sendStatus(400)
    });
};

const createReview = async (req, res) => {
  const { userID, productID, title, desc, rating, accepted } = req.body;
  return await Review.create({
    userID,
    productID,
    rating,
    title,
    desc,
    accepted,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null,
  })
    .then((review) => {
      Product.findByIdAndUpdate(productID, {
        $push: {
          reviews: review._id
        }
      })
        .then(productReview => console.log("productReview === ", productReview))
        .catch(err => {
          console.log("ERR WHEN PUSH REVIEWS TO PRODUCT", err);
          return res.sendStatus(400)
        })
      res.json(review);
    })
    .catch((err) => {
      console.log("ERROR WHEN CREATNG REVIEW === ", err);
      res.sendStatus(400)
    });
};

const updateReview = async (req, res) => {
  const { id } = req.params;
  const { userID, productID, title, desc, rating } = req.body;
  return await Review.findByIdAndUpdate(id, {
    userID,
    productID,
    rating,
    title,
    desc,
    updatedAt: Date.now(),
  }).then(review => {
    if (review === null) {
      res.send("No such Review")
    }
    console.log(review);
    return res.sendStatus(200)
  }).catch(err => {
    console.log(err);
    return res.sendStatus(400)
  })
}

const acceptReview = async (req, res) => {
  const { id } = req.params;
  const { accepted } = req.body;
  return await Review.findByIdAndUpdate(id, {
    accepted,
    updatedAt: Date.now(),
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.send({ error: true, errMsg: err }));
};

const restoreReview = async (req, res) => {
  const { id } = req.params;
  return await Review.findByIdAndUpdate(
    { _id: ObjectId(id) },
    { deletedAt: null }
  )
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log("err === ", err));
};

const softDeleteReview = async (req, res) => {
  const { id } = req.params;
  return await Review.findByIdAndUpdate(
    { _id: ObjectId(id) },
    { deletedAt: Date.now() }
  )
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
  // res.json({ isAdmin: false });
};

const deleteReview = async (req, res) => {
  const { id } = req.params;
  return await Review.deleteOne({ _id: ObjectId(id) }).then((product) => {
    res.json(product);
  });
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  softDeleteReview,
  restoreReview,
  acceptReview,
  updateReview
};
