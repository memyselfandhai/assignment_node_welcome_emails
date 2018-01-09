// services/email.js

const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

// code for using nodemailer
// const _transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

const EmailService = {};

EmailService.send = options => {
  return new Promise((resolve, reject) => {
    // Send the mail using the transport
    _transporter.sendMail(options, (err, info) => {
      err ? reject(err) : resolve(info);
    });
  });
};

// code for using sengrid

const _options = {
  service: "SendGrid",
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD
  }
};

// Create the SendGrid transport
const _transporter = nodemailer.createTransport(sendGridTransport(_options));

module.exports = EmailService;
