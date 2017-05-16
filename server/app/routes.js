var controller = require('./controller');
module.exports = function(app) {

	app.get('*', function(req, res) { res.sendfile('./public/index.html'); });
	app.post('/buildApp', controller.buildApp);
	app.get('/downloadCode', controller.downloadCode);
	
};
