const app = require("express").Router();
const {
  getAllReviews,
  getReview,
  deleteReview,
  restoreReview,
  softDeleteReview,
  createReview,
  acceptReview,
} = require("../controllers/reviews.controller");

const { verifyUserToken, verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/reviews", verifyAdminToken, getAllReviews);

app.get("/review/:id", verifyUserToken, getReview);

app.post("/review", verifyUserToken, createReview); // -------- REVIEW CREATE ------------

app.delete("/review/:id", verifyAdminToken, deleteReview);

app.patch("/review/restore/:id", verifyAdminToken, restoreReview);

app.patch("/review/accept/:id", verifyAdminToken, acceptReview);

app.patch("/review/soft-delete/:id", verifyAdminToken, softDeleteReview);

module.exports = app;
