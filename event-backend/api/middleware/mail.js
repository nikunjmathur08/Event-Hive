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
    from: '"EvinCon" <' + process.env.EMAIL + '>',
    to: to,
    subject: `🎉 New Event 🎉`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
          <h2 style="color: #333;">🎈 Event: ${event.name}</h2>
        </div>
        <div style="background-color: #fff; padding: 20px;">
          <p style="font-size: 16px;">📅 Date: ${event.startDate}</p>
          <p style="font-size: 16px;">📝 Description: ${event.desc}</p>
          <p style="font-size: 16px;">🏛️ Club: ${event.club}</p>
        </div>
        <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
          <a href="https://example.com" style="text-decoration: none; color: #007bff; font-size: 16px;">🔗 Visit Event Page</a>
        </div>
      </div>
    `,
  };  
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
}
module.exports = sendMail;