'use strict';

var express = require('express');
var log4js = require('log4js');
var path = require('path');
var errorMiddleware = require('./middleware/error_middleware');

var config = require('./config');
var logger = require('./logger');

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

	// By default, '/foo' and '/foo/' 
	app.set('strict routing', true);

	// All other routes should return a page not found.
	app.get('*', errorMiddleware.createMiddleware(errorMiddleware.TYPES.NOT_FOUND, 'No route matched.'));

	// The error handler to use for development.
	if (config.environment === 'development') { 
		app.use(errorMiddleware.errorHandlerDev);
	}

	// Error middleware
	app.use(errorMiddleware.errorHandler);
}

module.exports = loadRoutes;