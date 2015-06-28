var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//listen on port 8888
app.listen(8888,function(){
	console.log('Server is listening on port 8888');
})

app.use(express.static(path.join(__dirname, '../client/static')));

//body parser
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');

var models = require('../server/config/mongoose.js');
var routes = require('../server/config/routes.js')(app);
