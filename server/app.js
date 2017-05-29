var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
<<<<<<< HEAD
=======
<<<<<<< HEAD
var youtube= require('./controllers/youtbe');
=======



>>>>>>> origin/shubhamvohra
>>>>>>> 205071e815502748c999623cbf8c5ec93f883a68


var app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
<<<<<<< HEAD

const route = require('./routes/routes');
=======
const route = require('./controllers/roles');
>>>>>>> 205071e815502748c999623cbf8c5ec93f883a68
const Video = require('./models/videos');

//connect to mongodb

<<<<<<< HEAD
app.use('/',route);

app.locals.name = 'Shubham';
app.locals.id="678"

app.use(cors());

=======


<<<<<<< HEAD
app.use('/',route);



=======
>>>>>>> origin/shubhamvohra



app.use(cors());



>>>>>>> 205071e815502748c999623cbf8c5ec93f883a68
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

<<<<<<< HEAD

=======
>>>>>>> 205071e815502748c999623cbf8c5ec93f883a68

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
