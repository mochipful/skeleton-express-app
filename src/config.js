'use strict';

var _ = require('underscore');
var path = require('path');

var log = require('./logger');

var PATHS = {};
var config = {};

// Define some useful paths for th project
PATHS.ROOT = path.resolve(__dirname,'../');
PATHS.CONFIG = path.join(PATHS.ROOT, 'config');
PATHS.TEST = path.join(PATHS.ROOT, 'test');
PATHS.SRC = path.join(PATHS.ROOT, 'src');

// Load configuration file based on environment type.
if (process.env.NODE_ENV === 'development') {
	config = require(path.join(PATHS.CONFIG, 'development'));
} else if (process.env.NODE_ENV === 'production') {
	config = require(path.join(PATHS.CONFIG, 'production'));
} else {
	throw new Error('No config available for environment: ' + 
		process.env.NODE_ENV);
}

// Add PATHS to export object
config = _.defaults(config, { 'PATHS' : PATHS });

// Set log level from environment.
log.setLevel(config.logLevel);

log.info("Loading application from environment: " + config.environment);
log.info(config);

module.exports = config;