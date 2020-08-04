const app = require("express").Router();

const {
  getAllAttr,
  creatreAttr,
  deleteAttr,
  editAttr,
} = require("../controllers/attr.controller");

app.get("/attr", getAllAttr);

app.post("/attr", creatreAttr);

app.patch("/attr/:id", editAttr);

app.delete("/attr/:id", deleteAttr);

module.exports = app;
