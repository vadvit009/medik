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
  return await Order.findById(id).exec((err, singleNew) => {
    if (err) return res.send(err);
    res.send(singleNew);
  });
};

const createOrder = async (req, res) => {
  const {} = req.body;
  return await Order.create().exec((err, singleNew) => {
    if (err) return res.send(err);
    res.send(singleNew);
  });
};

const deleteOrder = async (req, res) => {
  const { id } = req.body;
  return await Order.findByIdAndDelete(id).exec((err, deletedNew) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = { getAllOrders, getOrder, createOrder, deleteOrder };
