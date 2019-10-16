const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const mongoose = require("mongoose");
const multer = require('multer');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser =require("body-parser");
const nodemailer = require('nodemailer');

// app.use(methodOverride('_method'));

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-2pm3nnjy.auth0.com",
  audience: "https://hotel-cauliflower.com/api"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-2pm3nnjy.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
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
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
    </ul>
    <h3>Message <h3>
    <p> ${req.body.message} </p>
    `
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'immanuel77@ethereal.email',
          pass: 'JSv392CF1SREKfgkXR'
      }
    });

    let mailOptions={
      from: 'test@testaccount.com',
      to: 'immanuel77@ethereal.email',
      replyTo: 'test@testaccount.com',
      subject:'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info)=>{
      if(err){
        return console.log(err);
      }

      console.log('Message sent: %s', info)
      console.log('Message URL: %', nodemailer.getTestMessageUrl(info))
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
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://user:P@ssw0rd@project3-8sn7w.mongodb.net/test");
const mongoURI = "mongodb+srv://user:P@ssw0rd@project3-8sn7w.mongodb.net/test";

const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
})

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.post_image });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
