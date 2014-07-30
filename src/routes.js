'use strict';

var log4js = require('log4js');
var logger = require('./logger');

var notFound = require('./routes/not_found');

function loadRoutes(app) {
	// Make all of the files in the /public folder accessible.
	app.use(express.static(path.join(__dirname, 'public')));

	/**
	 * Sets automatic logging for incoming requests. Logger level 'auto' means:
	 * 		WARN: http responses 3xx
	 * 		ERROR: http responses 4xx & 5xx
	 * 		INFO: else
	 */
	app.use(log4js.connectLogger(logger, { level: 'auto' }));

	// Turns off the http header.
	app.set('x-powered-by', false);

	// By default "/foo" and "/foo/" 
	app.set('strict routing', true);

	// All other routes should return a page not found.
	app.get('*', notFound.pageNotFoundHandler);
}

module.exports = loadRoutes;