const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser =require("body-parser");
const nodemailer = require('nodemailer');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form',(req, res)=>{
  console.log(req.body)
  nodemailer.createTestAccount((err,account) =>{
    const htmlEmail=`
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
    </ul>
    <h3>Message <h3>
    <p> ${req.body.message} </p>
    `
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'shubhi.test.upenn@gmail.com',
          pass: 'rnkdssbn'
      },
      tls:{
        rejectUnauthorized:false
      }
    });

    let mailOptions={
      from: '"Sandy Pet Hotel" <test@testaccount.com>',
      to: 'dheeru.singh228@gmail.com',
      replyTo: 'test@testaccount.com',
      subject:'Sandy Pet Hotel',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info)=>{
      if(err){
        res.sendStatus(400);
        return console.log(err);
      }
      res.sendStatus(200);
      console.log('Message sent: %s', info)
      console.log('Message URL: %', nodemailer.getTestMessageUrl(info));

    })
  })
})
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
