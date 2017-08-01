var ArticleModel = require('./models/article');

module.exports = function(argument) {
	ArticleModel.forge({
		title: 'simpleTitle' + (Math.random() * 1000),
		description: 'simpleDescription',
		password_digest: '123'
	}, {
    	hasTimestamps: true
	}).save();	
}