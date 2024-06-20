const nodeMailer = require('nodemailer');


const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,  
    pass: process.env.PASSWORD,
  },
});

async function sendMail(to, event) {
  mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: `New Event: ${event.name}`,
    html: `<h1>Event: ${event.name}</h1>
    <p>Description: ${event.desc}</p>
    <p>Date: ${event.startDate}</p>
    <p>Club: ${event.club}</p>`
  };  
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
}
module.exports = sendMail;