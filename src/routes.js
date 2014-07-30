'use strict';

var notFound = require('./routes/not_found');

function loadRoutes(app) {
	app.get('*', notFound.pageNotFoundHandler);
}

module.exports = loadRoutes;