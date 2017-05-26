var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var youtube= require('./controllers/youtbe')




var app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
const route = require('./routes/routes');
const Video = require('./models/videos');

//connect to mongodb

<<<<<<< HEAD
app.use('/',route);
=======

>>>>>>> 700e0bff20b966b639aaf64e1817596b01446066
app.use(cors());
var myLogger = function(req,res,next){
	console.log('Logger');
	next();
}

app.use(myLogger);
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

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  });

app.get('/',function(req,res){
	res.send('Hello Express');
})

app.listen(port,()=>{
	console.log('Server started at port:'+port);
});
