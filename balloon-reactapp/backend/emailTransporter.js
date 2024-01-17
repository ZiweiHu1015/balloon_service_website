const nodemailer = require('nodemailer');
require('dotenv').config();

console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);

const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email provider
  auth: {
    user: 'bostonggevents@gmail.com', // Your email address
    pass: '01041841Hz!' // Your email password
  }
});

const mailOptions = {
  from: 'bostonggevents@gmail.com',
  to: 'bostonggevents@gmail.com', // Replace with your test recipient email
  subject: 'Test Email',
  text: 'This is a test email'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = transporter;
