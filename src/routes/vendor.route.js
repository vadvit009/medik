const app = require("express").Router();

const {
  getAllVendor,
  createVendor,
  deleteVendor,
  editVendor,
} = require("../controllers/vendor.controller");

const { verifyAdminToken } = require('../middleware/jwtAuth')

app.get("/vendors", verifyAdminToken, getAllVendor);

app.post("/vendor", verifyAdminToken, createVendor);

app.patch("/vendor/:id", verifyAdminToken, editVendor);

app.delete("/vendor/:id", verifyAdminToken, deleteVendor);

module.exports = app;
