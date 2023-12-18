const express = require("express");
const app = express();
const validateEmail = require("./middlewares/emailValidator");
const transport = require("./utils/smtpTransport");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/email/send", validateEmail, async (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    to: email,
    from: "okejonnas@gmail.com",
    subject: "testing email sender",
    html: `<p>${message}</p>`,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    } else {
      res.status(200).json({ message: "Email sent" });
    }
  });
});

module.exports = app;
