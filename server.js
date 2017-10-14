var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));


app.use(express.static('public'));

mongoose.connect('mongodb://localhost/nytreact');

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

var Article = require('./models/Article.js');

app.get('/', function(req, res) {
	res.send('./public/index.html');
});

app.get('/api/saved', function(req, res) {
	Article.find({}, function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
});

app.post('/api/saved', function(req, res) {

})

app.listen(process.env.PORT || 3000, function() {
	console.log('App running on port 3000');
});