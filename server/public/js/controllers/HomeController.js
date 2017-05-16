controllers.controller(APP.CONTROLLERS.HomeController, HomeController);

HomeController.$inject = ['$scope', '$q', APP.MESSAGES, 'utils'];

function HomeController($scope, $q, APP_MESSAGES, utils) {

		/**********************************************************************************
	* Navigate to different view
	* @param newUrl
	* @return 
	*/
	$scope.navigate = function(newUrl){
		window.location.href = newUrl;
	};

	/**********************************************************************************
	* Navigate to template view
	* @param 
	* @return 
	*/
	$scope.navigateToTemplate = function(){
		
		$scope.navigate('/template');	
	};

	function init() {
		
		console.log('Home Controller');
	};

	init();
}