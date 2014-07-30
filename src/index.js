// Application entry point

var express = require('express');
var app = express();
var path = require('path');

var port = 8080;

// Make all of the files in the /public folder accessible.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log("Listening on http://localhost:" + port);