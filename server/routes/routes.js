const express = require('express');
var multer = require('multer');
const router = express.Router();

var fs = require('fs');
const Video = require('../models/videos');
var DIR = './uploads/';

var upload = multer({dest: DIR});


router.use('/uploads',function (req, res, next) {
  res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

var a = function(req, res){
		return multer({
    dest: DIR,
    rename: function (fieldname, filename) {
      return filename + Date.now();
    },
    onFileUploadStart: function (file) {
      console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
      console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
  });
}
router.use('/uploads',a);

router.get('/uploads', function(req, res){
  //console.log(req);
  res.send('bshdfghjdfsgjsfk');
});


router.post('/uploads', function (req, res) {
  console.log(req);
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    res.end('File is uploaded');
  });
});


module.exports = router;
