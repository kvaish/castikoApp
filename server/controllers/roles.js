var Roles=require('../models/roles.js');
var assert=require("assert");
var express = require('express');
var router = express.Router();


router.get('/getRoles',(req,res,next)=>{
	Roles.find({},function(err,roles){
		if(err){
			console.log(err);
		}
		else{
			res.json(roles);
		}
	});
});


router.post('/editRoles',(req,res,next)=>{
	let youtubelink = req.body.youtubelink;
	let actor = req.body.name;
	Roles.update({name:actor},(err,done)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log("Done.Result updated");
		}

	});
});

module.exports = router;
