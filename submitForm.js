// submitForm.js

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const formData = JSON.parse(event.body);

  // Initialize Nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  let mailOptions = {
    from: 'your-email@example.com',
    to: 'contact@dionismarkov.xyz',
    subject: formData.subject,
    text: `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
};
