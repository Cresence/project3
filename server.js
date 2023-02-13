const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const Schema = mongoose.Schema;
const db = require("./models");
const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//File upload Code start
const fileUpload = require('express-fileupload');

app.use(fileUpload());
// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    try {
      cloudinary.uploader.upload(`${__dirname}/client/public/uploads/${file.name}`, response => {
        db.Image.create({
          name: file.name,
          url: response.url
        });
        res.json({ url: response.url });
      });
    }
  
  catch (err) {
    console.log(err)
  }
  });
});

//File upload Code End

// Define middleware that validates incoming bearer tokens
// using JWKS from Auth0 site
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form',(req, res)=>{
  console.log(req.body)
  nodemailer.createTestAccount((err,account) =>{
    const htmlEmail=`
    <center>
    <img src="https://mighty-waters-45866.herokuapp.com/static/media/SandyspetHotel_LOGO.6fa1637c.gif" width="250px" />
    <h2>Contact Details</h2>
      <p><strong>Name: </strong>${req.body.name} </p>
      <p><strong>Email: </strong>${req.body.email} </p>
    </ul>
    <h2>Message </h2>
      <p> ${req.body.message} </p>
    </center>
    `
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: process.env.EMAIL_A_NAME,
          pass: process.env.EMAIL_A_PASS
      },
      tls:{
        rejectUnauthorized:false
      }
    });

    let mailOptions={
      from:  `"Sandy Pet Hotel" ${EMAIL_C_NAME}>`,
      to: process.env.EMAIL_B_NAME,
      replyTo: process.env.EMAIL_C_NAME,
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
// app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://devladev:z1IW0nwiFOOwkLmM@cluster0.yc9prxe.mongodb.net/?retryWrites=true&w=majority");

app.get("/api/images", (req, res) => {
  db.Image.findAll({}).then(result => res.json(result));
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

