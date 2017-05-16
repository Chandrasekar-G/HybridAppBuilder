controllers.controller(APP.CONTROLLERS.TemplateController, TemplateController);

TemplateController.$inject = ['$scope', '$q', APP.MESSAGES, 'utils'];

function TemplateController($scope, $q, APP_MESSAGES, utils) {

    		/**********************************************************************************
	* Navigate to different view
	* @param newUrl
	* @return 
	*/
	$scope.navigate = function(newUrl){
		window.location.href = newUrl;
	};

	/**********************************************************************************
	* Navigate to app builder view
	* @param 
	* @return 
	*/
	$scope.loadAppBuilderPage = function(){
		
		$scope.navigate('/appBuilder');	
	};

	function init() {
		
		console.log('Template Controller');
	};

	init();
}