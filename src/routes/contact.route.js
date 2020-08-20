const app = require("express").Router();

const {
  getAllContactUs,
  creatreContactUs,
  editContactUs,
  deleteContactUs,
  getContactUs
} = require("../controllers/contact.controller");

const { verifyAdminToken } = require('../middleware/jwtAuth')

app.get("/contact-us", verifyAdminToken, getAllContactUs);

app.get("/contact-us/:id", verifyAdminToken, getContactUs);

app.post("/contact-us", creatreContactUs);

app.patch("/contact-us/:id", verifyAdminToken, editContactUs);

app.delete("/contact-us/:id", verifyAdminToken, deleteContactUs);

module.exports = app;
