var cmd = require('node-cmd');
var zipFolder = require('zip-folder');

exports.buildApp = function(req, res, next){
	console.log("Building the app");
	 cmd.get(
        `
        cd template
        ionic platform add android
        ionic run android --device
        ionic serve
        `,
        function(err, data, stderr){
            console.log('the current working dir is : ',data);
        }
    );
    
};

exports.downloadCode = function(req, res, next) {
    zipFolder('template','appCode/App.zip', function(err){
        if(!err) {
            var file = "appCode/App.zip";
            res.download(file);
        }
    });
    
};