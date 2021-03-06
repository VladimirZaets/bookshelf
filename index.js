var express = require('express'),
	app = express();
	bodyParser = require('body-parser'),
	ArticleModel = require('./models/article'),
	articleRoute = require('./routes/article'),
	setData = require('./data');

app.use(function(req, res, next) {
	setData();
  	res.header('Access-Control-Allow-Origin', '*');
  	next();
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.get('/api/article', articleRoute);

app.listen(3030, function() {
	console.log('Start listen port 3030')
});