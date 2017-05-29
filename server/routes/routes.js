const express = require('express');
var multer = require('multer');
const router = express.Router();

var fs = require('fs');
const Video = require('../models/videos');
var DIR = './uploads/';



var upload = multer({dest: DIR});




module.exports = router;
