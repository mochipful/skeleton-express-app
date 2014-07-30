'use strict';

var exports = {};

exports.pageNotFoundHandler = function(req, res, next) {
	var renderOptions = { 
		'displayText': 'Nothing here.' 
	};

	res.render('page_not_found.must', renderOptions, function(err, html) {
		if (err) {
			next();
		}

		res.set({
		  'Content-Type': 'text/html',
		});

		res.status(404).send(html);
	});
}

module.exports = exports;