const app = require("express").Router();

const {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
} = require("../controllers/orders.controller");

const { verifyUserToken, verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/orders", verifyAdminToken, getAllOrders);

app.get("/order/:id", verifyUserToken, getOrder);

app.post("/order/:id", verifyUserToken, createOrder);

app.delete("/order/:id", verifyAdminToken, deleteOrder);

module.exports = app;
