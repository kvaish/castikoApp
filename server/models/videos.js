const mongoose = require('mongoose');




const VideoSchema = mongoose.Schema({
	video_desc:{
		type:String,
		required:true
	},
	video_link:{
		type:String,
		required:true
	},
	cast_dir_id:{
		type:Number
		
	}
});


const Video = module.exports = mongoose.model('Video',VideoSchema);