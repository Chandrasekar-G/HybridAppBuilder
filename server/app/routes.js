var controller = require('./controller');
module.exports = function(app) {

	app.post('/buildApp', controller.buildApp);
	app.get('/downloadCode', controller.downloadCode);
	
};
