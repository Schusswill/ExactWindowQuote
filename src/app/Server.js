const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// app.use(ra, origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("server started on port 3000");
});

app.post("/sendmail", (req, res)=> {
  console.log("request came");
  let user = req.body;
  sendMail(user, (err,info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email"});
    }else{
      console.log("email has been sent");
      res.send(info);
    }
  });
});


const sendMail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "smtpjavatest@gmail.com",
      pass: "qvPK4nUmFc2W"
    }
  })
}

const mailOptions = {
  from: `"exactWindowQuote", "smtpjavatest@gmail.com"`,
  to: "will.schuss@gmail.com",
  subject: "test",
  html: "test"
};

2sa23wwwe3dsendMail(mailOptions, callback);
