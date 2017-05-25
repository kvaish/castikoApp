const express = require('express');
const router = express.Router();

const Video = require('../models/videos');

var video = new Video({video_desc:"kavita",video_link:'https://www.youtube.com/watch?v=FQS7i2z1CoA'});


router.get('/print',function(req,res){
	res.json({
		"name":"sjoihdo",
		"age":"fwoed"
	});
});

router.get('/allvideos',function(req,res){
	Video.find(function(err,videos){
		if(err){
			console.log(err);
		}
		else{
			res.json(videos);
		}
	});
});

router.get('/insertvideo',function)


module.exports = router;