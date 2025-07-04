const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'gueye.amadou1996@gmail.com', // Your email
      pass: 'your-email-password', // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'gueye.amadou1996@gmail.com', // Your email
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
