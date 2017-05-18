controllers.controller(APP.CONTROLLERS.TemplateController, TemplateController);

TemplateController.$inject = ['$scope','$rootScope', '$q', APP.MESSAGES, 'utils'];

function TemplateController($scope,$rootScope, $q, APP_MESSAGES, utils) {

	$scope.appInfoObj = {
		name : null,
		desc : null,
		packageName : null,
		location : null,
		fromDate : null,
		toDate : null
	};
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
		
		localStorage.setItem("appInfo",JSON.stringify($scope.appInfoObj));
		$scope.navigate('/appBuilder');	
	};

	function init() {
		
		console.log('Template Controller');
	};

	init();
}