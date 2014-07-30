'use strict';

var engines = require('consolidate');
var path = require('path');

var viewsDirectory = path.join(__dirname, 'templates');

// @INFO: Figure out a good template engine here: http://garann.github.io/template-chooser/
// @INFO: See a list of valid consolidate engines here: https://github.com/visionmedia/consolidate.js/#supported-template-engines
var templateEngine = 'mustache'
var fileExt = 'must';

function loadEngine(app) {
	app.set('view engine', fileExt);
	app.engine(fileExt, engines[templateEngine]);

	app.set('views', viewsDirectory);
}

// @TODO: would we ever want to chain template engines?

module.exports = loadEngine;