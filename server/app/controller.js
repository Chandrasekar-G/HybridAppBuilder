var cmd = require('node-cmd');
var zipFolder = require('zip-folder');
var ncp = require('ncp');
var fs = require('fs');

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

exports.fileUpload = function(req, res, next) {
    var source = "temp/",
        destination = "uploads/" + req.body.filePath + "";

        console.log(source + "--" + destination);
  
    
    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        rmDir(source, false);
    });
};

rmDir = function(dirPath, removeSelf) {
      if (removeSelf === undefined)
        removeSelf = true;
      try { var files = fs.readdirSync(dirPath); }
      catch(e) { return; }
      if (files.length > 0)
        for (var i = 0; i < files.length; i++) {
          var filePath = dirPath + '/' + files[i];
          if (fs.statSync(filePath).isFile())
            fs.unlinkSync(filePath);
        }
      if (removeSelf)
        fs.rmdirSync(dirPath);
    };