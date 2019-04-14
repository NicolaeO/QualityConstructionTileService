var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
const fs = require('fs');

require('dotenv').config();
const nodemailer = require('nodemailer');

var emailConfig = require('./myConfig');


const port = process.env.PORT || 8000;
// var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var router = express.Router();

console.log('Server is runing on port '+ port);

/****************************** Router ***************************/
async function sendIt(email, subject, text, fname, lname){
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailConfig.MY_EMAIL_ADDRESS,
      pass: emailConfig.MY_PASSWORD
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${fname} ${lname}"  <${email}>`, // sender address
    to: "nicu104@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: text // html body
  });

}

router.post('/api/sendMail', function(req, res){
console.log(process.env);
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email || "example@test.com";
  var subject = req.body.subject || "Website message";
  var text = `Hello Andrei my name is ${fname} ${lname}. <br>My contacts ${req.body.email} ${req.body.phone_number} <br>${req.body.message}`;
  var destination = "constructiontile@gmail.com";

  sendIt(email, subject, text, fname, lname).catch(console.error);

  res.json({success : "Message sent successfully", status : 200});
});



router.get('*', function(req, res){
    res.sendFile('index.html', { root: __dirname + '/' });
});

/****************************** /Router ***************************/

//app.use(morgan('dev')); // log every request to the console
app.use(express.static(__dirname + '/')); // Static (public) folder

app.use(bodyParser.urlencoded({extended:true}));// get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// app.use(methodOverride());
app.use('/', router); // app.use('/parent', router); call all from localhost:port/parent/*

app.listen(port);
