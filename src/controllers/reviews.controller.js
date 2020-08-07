const { Review } = require("../models");
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
    .then((product) => res.json(product))
    .catch((err) => res.send({ err: true, errorMsg: err }));
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
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.send({ error: true, errMsg: err }));
};

const updateReview = (req, res) => {
  const { id } = req.query;
  console.log("ID REVIEW === ", id);
  const { userID, productID, title, desc, rating } = req.body;
  
  console.log("REQ.BODY REVIEW === ", req.body);
  return Review.findByIdAndUpdate(id, {
    userID,
    productID,
    rating,
    title,
    desc,
    updatedAt: Date.now(),
  }).then(review => {
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

const softDeleteReview = async (req, res) => {
  const { id } = req.params;
  return await Review.findByIdAndUpdate(
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
