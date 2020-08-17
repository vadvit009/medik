const app = require("express").Router();

const {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder
} = require("../controllers/orders.controller");

const { verifyUserToken, verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/orders", verifyAdminToken, getAllOrders);

app.get("/order/:id", verifyUserToken, getOrder);

app.post("/order", verifyUserToken, createOrder);

app.patch("/order/:id", verifyUserToken, updateOrder);

app.delete("/order/:id", verifyAdminToken, deleteOrder);

module.exports = app;
