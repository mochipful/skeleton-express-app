'use strict';

var _ = require('underscore');

var log = require('../services/logger');
var notFoundRoute = require('../routes/not_found');

var exports = {};

exports.TYPES = {
	'NOT_FOUND' : 'PAGE_NOT_FOUND'
};

exports.createError = function(type, message) {
	var err; 

	if (!_.contains(_.values(exports.TYPES), type)) {
		return new Error('Invalid Error Type');
	}

	err = new Error(message);
	err.STATUS = type;

	log.error(err.message);
	return err;
};

exports.createMiddleware = function(type, message) {
	return function(req, res, next) {
		next(exports.createError(type, message));
	};
};

exports.errorHandlerDev = function(err, req, res, next) {
	if (err.STATUS === exports.TYPES.NOT_FOUND) {
		notFoundRoute.pageNotFoundHandler(req, res, next);
	} else {
		res.status(500).send(err.message);
	}
};

exports.errorHandler = function(err, req, res, next) {
	if (err.STATUS === exports.TYPES.NOT_FOUND) {
		notFoundRoute.pageNotFoundHandler(req, res, next);
	} else {
		res.status(500).send('Internal Server Error.');
	}
};

module.exports = exports;
