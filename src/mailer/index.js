const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function restorePassword(email) {
  let transporter = nodemailer.createTransport({
    host: "skm273.hostsila.org",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "support@fastandclever.com", // generated ethereal user
      pass: "o=rg9KlHQi]C", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Med Technika Ternopil" <support@fastandclever.com>', // sender address
    to: email, // list of receivers
    subject: "Restore password", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

async function register(email) {
  let transporter = nodemailer.createTransport({
    host: "skm273.hostsila.org",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "support@fastandclever.com", // generated ethereal user
      pass: "o=rg9KlHQi]C", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Med Technika Ternopil" <support@fastandclever.com>', // sender address
    to: email, // list of receivers
    subject: "Success registration", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { register, restorePassword };
