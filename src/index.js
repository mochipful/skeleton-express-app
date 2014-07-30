// Application entry point
'use strict';

var express = require('express');
var app = express();
var path = require('path');

var loadEngine = require('./engine');

var port = 8080;

// Configures the template engine for the application.
loadEngine(app);

// Make all of the files in the /public folder accessible.
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res, next) {
	var renderOptions = { 
		'displayText': 'Nothing here.' 
	};

	res.render('page_not_found', renderOptions, function(err, html) {
		if (err) {
			next();
		}

		res.set({
		  'Content-Type': 'text/html',
		});

		res.status(404).send(html);
	});
});

app.listen(port);
console.log("Listening on http://localhost:" + port);