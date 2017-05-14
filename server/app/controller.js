var cmd = require('node-cmd');

exports.buildApp = function(req, res, next){
	console.log("Building the app");
	 cmd.get(
        `
        cd template
        ionic serve
        `,
        function(err, data, stderr){
            console.log('the current working dir is : ',data);
        }
    );
    
}