'use strict';
const mongoose = require('mongoose');

    var ActorSchema =mongoose.Schema({
        username:{
        	type:String,
        	required:true,
        	unique:true
        },
        password:{
        	type:String,
        	required:true
        },
        basic:{
        	name:{
        		type:String,
        		required:true
        	},
        	height:{
        		type:String
        	},
        	weight:{
        		type:String
        	},
        	sex:{
        		type:String
        	},
        	dob:{
        		type:String
        	},
        	screenage:{
        		type:String,
        		required:true
        	},
        	phonenumber:{
        		type:Number,
        		required:true,
        		unique:true
        	},
        	pictures:{
        		type:Array
        	},

        },
        experience:{
        	youtube_ref:{
        		type:String
        	},
        	title:{
        		type:String
        	},
        	role:{
        		type:String
        	},
        	year:{
        		type:String
        	},
        	about:{
        		type:string
        	}
        }
    
    });
const Actor = module.exports = mongoose.model('Actor',ActorSchema);


