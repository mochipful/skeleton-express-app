// Application entry point
'use strict';

var express = require('express');
var app = express();

var loadEngine = require('./init/engine');
var loadRoutes = require('./init/routes');

var port = 8080;

// Configures the template engine for the application.
loadEngine(app);

// Load the routes for the application.
loadRoutes(app);

app.listen(port);
console.log("Listening on http://localhost:" + port);