var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

const route = require('./routes/routes');
const Video = require('./models/videos');

//connect to mongodb

app.use('/',route);

app.locals.name = 'Shubham';
app.locals.id="678"

app.use(cors());

app.use('/api',route);

mongoose.connect('mongodb://localhost:27017/castiko');

mongoose.connection.on('connected',(err)=>{
	if(err){
		console.log('Error');
	}
	else{
		console.log('Connected');
	}
});



app.get('/',function(req,res){
	var name = app.locals.name;
	res.send({
		name:name,
		id:app.locals.id
	});
})

app.listen(port,()=>{
	console.log('Server started at port:'+port);
});
