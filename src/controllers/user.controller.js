const { User } = require("../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { restorePassword } = require("../mailer");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  getAllUsers: async (req, res) => {
    return await User.find({})
      .then((users) => res.json(users))
      .catch((err) => console.log(err));
  },

  getUser: async (req, res, next) => {
    const { id } = req.params;
    return await User.findOne({ userId: id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => err && res.sendStatus(409));
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const key = crypto.createHash("md5").update(password).digest("hex");
    return await User.findOne({ email: email, password: key })
      .then((user) => {
        if (user.email === email) {
          if (user.password === key) {
            if (user.role === true) {
              const token = jwt.sign(
                { id: user.userId },
                process.env.SECRET_ADMIN,
                {
                  expiresIn: "1h",
                }
              );
              res.cookie("token", token, {
                expires: new Date(Date.now() + 90000000),
                httpOnly: true,
                secure: true,
              });
              res.json({ isAdmin: user.role, token: token });
            } else {
              const token = jwt.sign({ id: user.userId }, process.env.SECRET, {
                expiresIn: "1h",
              });
              res.cookie("token", token);
              res.send(user);
            }
          } else {
            res.sendStatus(403);
          }
        } else {
          res.sendStatus(403);
        }
      })
      .catch((err) => err && res.sendStatus(403));
  },

  logout: async (req, res) => {
    res.header("authorization", null);
    res.send("logout");
  },

  register: async (req, res) => {
    const { fName, lName, fatherName, phone, email, password } = req.body;
    const key = crypto.createHash("md5").update(password).digest("hex");
    return await User.findOne({ email: email }).then((user) => {
      if (!user) {
        User.create({
          fName,
          lName,
          fatherName,
          phone,
          email,
          password: key,
          role: false,
        })
          .then((user) => {
            const token = jwt.sign({ id: user.userId }, process.env.SECRET, {
              expiresIn: "1h",
            });
            res.send({ token, user });
          })
          .catch((err) => err && res.sendStatus(409));
      } else {
        res.sendStatus(409);
      }
    });
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const {
      fName,
      lName,
      phone,
      email,
      password,
      fatherName,
      gallery,
    } = req.body;
    const key = crypto.createHash("md5").update(password).digest("hex");
    return await User.findByIdAndUpdate(
      { _id: ObjectId(id) },
      {
        fName,
        lName,
        phone,
        email,
        fatherName,
        gallery,
        password: key,
        role: false,
      }
    )
      .then((user) => res.json(user))
      .catch((err) => err && res.sendStatus(409));
  },

  restorePassword: async (req, res) => {
    const { email } = req.body;
    return await User.findOne({ email: email })
      .then((user) => {
        if (user) {
          restorePassword(email);
          // jwt.sign()
          res.sendStatus(200);
        } else {
          res.sendStatus(400);
        }
      })
      .catch((err) => err && res.sendStatus(409));
  },

  changePassword: async (req, res) => {
    const { email, password } = req.body;
    const key = crypto.createHash("md5").update(password).digest("hex");
    return await User.findOne({ email: email }, { password: key })
      .then((user) => {
        // jwt.verify()
        res.send("pass changed successfully");
      })
      .catch((err) => res.send(err));
  },

  restoreUser: async (req, res) => {
    const { id } = req.params;
    return await User.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { deletedAt: null }
    )
      .then((user) => res.json(user))
      .catch((err) => res.send(err));
  },

  softDeleteUser: async (req, res) => {
    const { id } = req.params;
    return await User.findByIdAndUpdate(
      { _id: ObjectId(id) },
      { deletedAt: Date.now() }
    )
      .then((user) => res.json(user))
      .catch((err) => res.send(err));
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    return await User.findByIdAndRemove({ _id: ObjectId(id) })
      .then((user) => res.json(user))
      .catch((err) => res.send(err));
  },
};
