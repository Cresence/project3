const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
fs = require('fs')
const Schema = mongoose.Schema;
const db = require("./models");
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: "hclrafapv",
  api_key: "568959517744279",
  api_secret: "yYbYsfUzQcY3WlsmE844b0cctj4"
});

require('./ImgModel');

//File upload Code start
const fileUpload = require('express-fileupload');

app.use(fileUpload());
// Upload Endpoint
app.post('/upload', (req, res) => {
  // console.log(req);
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
        console.log(response.url);
        // console.log(res);
        db.Image.create({
          name: file.name,
          url: response.url
        })
        res.json({ url: response.url });
        // res.status(200);
      });
    }
  
  catch (err) {
    console.log(err)
  }
  });
});

//File upload Code End


// var Item = new ItemSchema(
//   { img: 
//     {data: Buffer, contentType: String }
//   }
// );
// var Item = mongoose.model('Images', ItemSchema);


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//   cb(null, 'public')
// },
// filename: function (req, file, cb) {
//   cb(null, Date.now() + '-' +file.originalname )
// }
// })

// const upload = multer({ storage: storage }).single('file');

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

// image routes

// app.post("/api/photo", (req, res) => {
//   console.log(req.body);

//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json(err)
//     } else if (err) {
//       return res.status(500).json(err)
//     }
//     return res.status(200).send(req.file)


//   })

// });

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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// app.use(multer({ dest: './uploader/',
// rename: function (fieldname, filename) {
//   return filename
// }}))

// app.post('/api/photo', (req, res) => {
//   // const newItem = new Item();
//   // newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   // console.log(req.files.userPhoto);
//   console.log(req);
//   // newItem.save()
//   const conn = mongoose.connection;
// // Connect GridFS and Mongo
//   Grid.mongo = mongoose.mongo;

//   conn.once('open', function () {
//     console.log('- Connection open -');
//     const gfs = Grid(conn.db);

//     // when connection is open, create write stream with
//     // the name to store file as in the DB
//     const writestream = gfs.createWriteStream({
//         filename: req.files.userPhoto.name
//     });
//     // create a read-stream from where the video currently is
//     // and pipe it into the database (through write-stream)
//     fs.createReadStream(dataPath).pipe(writestream);

//     writestream.on('close', function (file) {
//         // do something with 'file'
//         // console logging that it was written successfully
//         console.log(file.filename + ' Written to DB');
//     });
// })

// });

// const getExtension = file =>{
//   if (file.mimetype == "image/jpeg")
//       ext =  ".jpeg"
//   else
//       ext =".png"
//   return ext;
// }

//initialize multer
// var storage = multer.diskStorage({ 
//   destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, '../public/images'))
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + getExtension(file))
//   }
// })
// var upload = multer({storage:storage})

// app.post('/api/photo', upload.single('file'), (req, res, next)=>{
//   if (req.file && req.file.mimetype != 'image/jpeg' && req.file.mimetype != 'image/png') 
//       return res.json({
//           status:1,
//           message:"Please Choose JPG or PNG images"
//       })
// if(req.file){
//           let image = "/images/" + req.file.filename
// res.json({
//           status:0,
//           message:"Successfully saved",
//           path : image
//       })
//       }
// })

// var router = express.Router()

// app.use(cors());


// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//       cb(null, 'uploads/')
//   }
// });
// const upload = multer({ storage: storage });

// router.route('/img_data')
// .post(upload.single('file'), function(req, res) {
//     var new_img = new Img;
//     new_img.img.data = fs.readFileSync(req.file.path)
//     new_img.img.contentType = 'image/jpeg';
//     new_img.save();
//     res.json({ message: 'New image added to the db!' });
// }).get(function(req, res) {
//   Img.findOne({}, 'img createdAt', function(err, img) {
//       if (err)
//           res.send(err);
//       // console.log(img);
//       res.contentType('json');
//       res.send(img);
//   }).sort({ createdAt: 'desc' });
// });
// // const multer = require('multer');
// // const upload = multer({ storage: storage });
// app.post('/api/photo', upload.single('file'), function(req, res) {
// console.log(req);
// });

app.get("/api/images", (req, res) => {
  db.Image.findAll({}).then(result => res.json(result));
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

