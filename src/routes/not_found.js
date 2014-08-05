'use strict';

var exports = {};

exports.pageNotFoundHandler = function(req, res, next) {
	var renderOptions = { 
		'displayText': 'There\'s nothing here.' 
	};

	res.render('page_not_found.must', renderOptions, function(err, html) {
		if (err) {
			next(err);
		}

		res.set({
		  'Content-Type': 'text/html',
		});

		res.status(404).send(html);
	});
}

module.exports = exports;