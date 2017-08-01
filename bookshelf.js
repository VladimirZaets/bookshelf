var knex = require('knex'),
	bookshelf = require('bookshelf'),
	knexConfig = require('./knexfile'),
	bookshelfInitialized = bookshelf(knex(knexConfig.development));

module.exports = bookshelfInitialized;