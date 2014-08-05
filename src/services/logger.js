'use strict';

var log4js = require('log4js');
var logger = log4js.getLogger();

// Log levels: [ TRACE | DEBUG | INFO | WARN | ERROR | FATAL ]
logger.setLevel('TRACE');

module.exports = logger;