const { Vendor } = require("../models");

const getAllVendor = (req, res) => {
  return Vendor.find({}).then((vendors) => res.send(vendors));
};

const createVendor = (req, res) => {
  const { title, desc } = req.body;
  return Vendor.create({
    title,
    desc,
    deletedAt: null,
  }).then((vendor) => res.send(vendor));
};

const editVendor = (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  return Vendor.findByIdAndUpdate(id, { title, desc })
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const deleteVendor = (req, res) => {
  const { id } = req.params;
  return Vendor.findByIdAndDelete(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

module.exports = { getAllVendor, createVendor, deleteVendor, editVendor };
