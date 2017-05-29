var mongoose = require('mongoose');

var RoleSchema = mongoose.Schema({
	name:{
		type:String
	},
	sex:{
		type:String
	},
	age:{
		type:Number
	},
	description:{
		type:String
	},
	youtubelink:{
		type:String,
		unique:true
	}
});

var Roles = module.exports = mongoose.model('Roles',RoleSchema);