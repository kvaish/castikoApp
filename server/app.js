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
const route = require('./controllers/roles');
const Video = require('./models/videos');

//connect to mongodb






app.use(cors());



app.use('/api',route);

mongoose.connect('mongodb://localhost:27017/castikoApp');

mongoose.connection.on('connected',(err)=>{
	if(err){
		console.log('Error');
	}
	else{
		console.log('Connected');
	}
});


app.get('/',function(req,res){
	res.send('Hello Express');
})

app.listen(port,()=>{
	console.log('Server started at port:'+port);
});
