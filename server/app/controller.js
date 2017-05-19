var cmd = require('node-cmd');
var zipFolder = require('zip-folder');
var ncp = require('ncp');
var fs = require('fs');
var deleteDir = require('rmdir');

exports.buildApp = function(req, res, next){
	console.log("Starting to Build the App......");
    var builderObj = req.body,
        builderString = "var BUILDER = " + JSON.stringify(builderObj),
        appName = builderObj.APP_NAME,
        packageName = builderObj.PACKAGE_NAME;
        
    copyBuilderJS(builderString);
	cmd.get(
        `
        cd template
        ionic serve
        `,
        function(err, data, stderr){
            console.log('the current working dir is : ',data);
        }
    );
};

exports.previewInDevice = function(req, res, next) {
    console.log("Starting to Preview the App in device ......");
    var builderObj = req.body,
        builderString = "var BUILDER = " + JSON.stringify(builderObj),
        appName = builderObj.APP_NAME,
        packageName = builderObj.PACKAGE_NAME;
    
        copyConfigFile();
    setTimeout(function() {
        copyBuilderJS(builderString);
        nameTheApp(appName, packageName);
        copyIconAndSplash();   
    }, 1000);
    
    
	 cmd.get(
        `
        cd template
        ionic resources --icon
        ionic platform add android
        ionic run android --device
        `,
        function(err, data, stderr){
            console.log('the current working dir is : ',data);
        }
    );
};

exports.downloadCode = function(req, res, next) {
    console.log("In download code");
    var source = "template/",
        destination = "customCode/";
        deleteDir(destination, function(err, dirs, files) {                                             // Delete the previous folders if any
            fs.mkdirSync(destination, 0766, function(err){                                              // Create the custom code folder    
                fs.unlink("App.zip", function(err){                                                        // Delete the previous App.zip
                    ncp(source, destination, function(err){                                             // copy code from template to custom downloadCode
                        if(err) {
                            console.log(err);
                        }
                        else {
                            console.log(destination+"node_modules/")
                            deleteDir(destination+"node_modules/", function(err, dirs, files) {         // Delete node_modules
                                deleteDir(destination+"platforms/", function(err, dirs, files){         // Delete platforms
                                    zipFolder('customCode','App.zip', function(err){                    // Zip the folder and send it in response
                                        if(!err) {
                                            var file = "App.zip";
                                            res.download(file);
                                        }
                                    });
                                });
                            });
                            console.log("Hi");
                        }
                    });
                });
            });
        });
};

exports.downloadapk = function(req, res) {
    var file = "template/platforms/android/build/outputs/apk/android-debug.apk";
    res.download(file);
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

var nameTheApp = function(name, packageName) {
    var oldString = "<name>App</name>";
        newString = "<name>"+name+"</name>",
        oldString1 = '<widget id="com.ionicframework.app829485" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">',
        newString1 = '<widget id="'+packageName+'" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">';
        xmlFile = "template/config.xml";
    fs.readFile(xmlFile, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        var result = data.replace(oldString, newString);
        var finalResult = result.replace(oldString1, newString1);
        console.log("App Named..." + name);
        console.log(finalResult);
        fs.writeFile(xmlFile, finalResult, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
};

var copyBuilderJS = function(builderString) {
    var builderFilePath = "template/www/js/builder.js";
    fs.truncate(builderFilePath, 0, function() {
        fs.writeFile(builderFilePath, builderString, function (err) {
            if (err) {
                return console.log("Error writing file: " + err);
            }
        });
    }); 
};

var copyIconAndSplash = function() {
  var source = "uploads/icon.png",
        destination = "template/resources/icon.png";

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
    });
};

var copyConfigFile = function() {
    var source = "temp/config.xml",
        destination = "template/config.xml";

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
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