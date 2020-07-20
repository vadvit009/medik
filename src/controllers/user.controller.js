const { User } = require("../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { restorePassword } = require("../mailer");

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
              res.json({ token, isAdmin: user.roleId });
            } else {
              const token = jwt.sign({ id: user.userId }, process.env.SECRET, {
                expiresIn: "1h",
              });
              res.cookie({ token: token });
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
    const { fName, lName, phone, email, password, role, gallery } = req.body;
    const key = crypto.createHash("md5").update(password).digest("hex");
    return await User.findOne({ email: email }).then((user) => {
      if (!user) {
        User.create({
          fName,
          lName,
          phone,
          email,
          gallery,
          password: key,
          role,
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
    const { firstName, lastName, phone, email, password, roleId } = req.body;
    const key = crypto.createHash("md5").update(password).digest("hex");
    return await User.update(
      {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        key: key,
        roleId: roleId,
      },
      { where: { userId: id } }
    )
      .then((user) => res.json(user))
      .catch((err) => err && res.sendStatus(409));
  },

  restorePassword: async (req, res) => {
    const { id } = req.query;
    const email = "agrinkiv74@gmail.com, alexander.khanas.work@gmail.com";
    return await User.findOne({ userId: id })
      .then((user) => {
        res.json(user);
        restorePassword(email);
      })
      .catch((err) => err && res.sendStatus(409));
    // const { id } = req.params;
    // const { password } = req.body;
    // const key = crypto.createHash("md5").update(password).digest("hex");
    // return await User.findByIdAndUpdate(id, { password: key })
    //   .then((user) => console.log(user))
    //   .catch((err) => console.log(err));
  },

  restoreUser: async (req, res) => {
    const { id } = req.params;
    return await User.update({ deletedAt: null }, { where: { userId: id } })
      .then((user) => res.json(user))
      .catch((err) => res.send(err));
  },

  softDeleteUser: async (req, res) => {
    const { id } = req.params;
    return await User.update({ deletedAt: "now()" }, { where: { userId: id } })
      .then((user) => res.json(user))
      .catch((err) => res.send(err));
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    return await User.destroy({ where: { userId: id } })
      .then((user) => res.json(user))
      .catch((err) => res.send(err));
  },
};
