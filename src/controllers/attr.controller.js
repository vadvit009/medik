const { Attr } = require("../models");

const getAllAttr = (req, res) => {
  return Attr.find({}).then((attrs) => res.send(attrs));
};

const creatreAttr = (req, res) => {
  const { name } = req.body;
  return Attr.create({
    name,
    deletedAt: null,
  }).then(() => res.redirect(307, '/attr'));
};

const editAttr = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  return Attr.findByIdAndUpdate(id, { name })
    .then(() => res.redirect(307, '/attr'))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const deleteAttr = (req, res) => {
  const { id } = req.params;
  return Attr.findByIdAndDelete(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

module.exports = { getAllAttr, creatreAttr, deleteAttr, editAttr };
