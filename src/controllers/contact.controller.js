const { Contact } = require("../models");

const getAllContactUs = (req, res) => {
  return Contact.find({})
    .then((ContactUs) => res.send(ContactUs));
};

const getContactUs = (req, res) => {
  const { id } = req.params;
  return Contact.findById(id)
    .then(singleForm => res.send(singleForm))
    .catch(err => {
      console.log("ERR when getting single contact form === ", err);
      return res.sendStatus(400);
    })
};

const creatreContactUs = (req, res) => {
  const { name, phone, message } = req.body;
  return Contact.create({
    name,
    message,
    phone,
    read: false,
    deletedAt: null,
  }).then((contactForm) => res.send(contactForm))
    .catch(err => {
      console.log('ERROR WHEN CREATE CONTACT-US FORM', err);
      return res.sendStatus(400)
    });
};

const editContactUs = (req, res) => {
  const { id } = req.params;
  const { read } = req.body;
  return Contact.findByIdAndUpdate(id, { read })
    .then((updatedForm) => res.send(updatedForm))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const deleteContactUs = (req, res) => {
  const { id } = req.params;
  return Contact.findByIdAndDelete(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

module.exports = { getAllContactUs, getContactUs, creatreContactUs, editContactUs, deleteContactUs };
