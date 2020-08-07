const app = require("express").Router();

const {
  getAllAttr,
  creatreAttr,
  deleteAttr,
  editAttr,
} = require("../controllers/attr.controller");

const { verifyAdminToken } = require('../middleware/jwtAuth')

app.get("/attr", getAllAttr);

app.post("/attr", verifyAdminToken, creatreAttr);

app.patch("/attr/:id", verifyAdminToken, editAttr);

app.delete("/attr/:id", verifyAdminToken, deleteAttr);

module.exports = app;
