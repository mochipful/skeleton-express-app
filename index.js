// Application entry point

var http = require('http');
var os = require('os');

var app = require('express')();

var server = http.createServer(app);
var port = 8080;

server.listen(port);
console.log("Listening on http://" + os.hostname() + ":" + port);