const { Order } = require("../models");

const getAllOrders = async (req, res) => {
  return await Order.find()
    .populate({
      path: "userID",
      select: "fName lName -_id",
    })
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getOrder = async (req, res) => {
  const { id } = req.body;
  return await Order.findById(id).exec((err, order) => {
    if (err) return res.send(err);
    res.send(order);
  });
};

const createOrder = async (req, res) => {
  const { userID, products, sum, status, delivery, paymentType } = req.body;
  return await Order.create({
    userID,
    products,
    sum,
    status,
    delivery,
    paymentType,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null,
  }).exec((err, order) => {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(order);
  });
};

const deleteOrder = async (req, res) => {
  const { id } = req.body;
  return await Order.findByIdAndDelete(id).exec((err, order) => {
    if (err) return res.send(err);
    res.sendStatus(200).send("Deleted");
  });
};

module.exports = { getAllOrders, getOrder, createOrder, deleteOrder };
