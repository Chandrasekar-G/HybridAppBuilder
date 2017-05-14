var controller = require('./controller');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/index.html');
	// });

	app.post('/buildApp', controller.buildApp);

};


/*
var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/buildApp', controller.buildApp);

module.exports = router;
 */