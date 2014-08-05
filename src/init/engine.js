'use strict';

var engines = require('consolidate');
var path = require('path');

var viewsDirectory = path.resolve(__dirname, '../templates');

// @INFO: Figure out a good template engine here: http://garann.github.io/template-chooser/
// @INFO: See a list of valid consolidate engines here: https://github.com/visionmedia/consolidate.js/#supported-template-engines
var templateEngine = 'mustache';
var fileExt = 'must';

function loadEngine(app) {
	app.set('view engine', fileExt);
	app.engine(fileExt, engines[templateEngine]);

	app.set('views', viewsDirectory);
}

// @TODO: would we ever want to chain template engines?
// @TODO: How do we set up the default set of vars for each template?
// @TODO: Can we log @INFO annotations so they can be removed when this project is repurposed?

module.exports = loadEngine;