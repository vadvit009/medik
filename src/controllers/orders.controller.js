const { Order, User, Product } = require("../models");
const { ObjectId } = require("mongoose").Types;

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
    const {
        userID,
        products,
        sum,
        status,
        phone,
        fName,
        lName,
        paymentType,
        deliveryCity,
        deliveryStreet,
        deliveryHouse,
        deliveryApartament,
        deliveryWarehouse,
    } = req.body;
    await Order.create({
        userID,
        products,
        sum,
        status,
        phone,
        fName,
        lName,
        deliveryCity,
        deliveryStreet,
        deliveryHouse,
        deliveryApartament,
        deliveryWarehouse,
        paymentType,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        deletedAt: null,
    })
        .then((order) => res.send(order))
        .catch((err) => err && res.sendStatus(400));
    await User.findByIdAndUpdate(userID, {
        deliveryCity,
        deliveryStreet,
        deliveryHouse,
        deliveryApartament,
        deliveryWarehouse,
    }).exec((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);
    });
    await products.forEach((prod) => {
        Product.findByIdAndUpdate(prod.id, {
            $inc: { quantity: -prod.quantity },
        }).exec((err) => {
            if (err) {
                console.log(err);
                res.sendStatus(400);
            }
        });
    });
};

const updateOrder = async (res, req) => {
    const { id } = req.params;
    const { status, products } = req.body;
    if (status === 'cancelled') {
        await Order.findByIdAndUpdate(id, { status }).exec(err => {
            if (err) {
                console.log(err);
                res.sendStatus(400)
            }
        })
        await products.forEach((prod) => {
            Product.findByIdAndUpdate(prod.id, { $inc: { quantity: +prod.quantity } }).exec(err => {
                if (err) {
                    console.log(err);
                    res.sendStatus(400)
                }
                res.sendStatus(200)
            })
        })
    } else {
        res.sendStatus(200)
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    return await Order.findByIdAndDelete(id).exec((err, order) => {
        if (err) return res.send(err);
        res.sendStatus(200).send("Deleted");
    });
};

const userOrderHistory = (req, res) => {
    const { id } = req.body;
    Order.find({ userID: id })
        .exec((err, orders) => {
            if (err) {
                res.sendStatus(400)
            }
            res.send(orders)
        })
}

module.exports = { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder, userOrderHistory };