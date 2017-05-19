var controller = require('./controller');
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './temp');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);        
  }
});

var upload = multer({ storage: storage });

module.exports = function(app) {

	app.post('/buildApp', controller.buildApp);
  app.post('/previewInDevice',controller.previewInDevice);
	app.get('/downloadCode', controller.downloadCode);
  app.get('/downloadapk', controller.downloadapk);
	app.post('/fileUpload',upload.single('image'), controller.fileUpload);
  app.get('*', function(req, res) { res.sendfile('./public/index.html'); });	
   
};
