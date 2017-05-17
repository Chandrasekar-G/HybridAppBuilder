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

	$scope.addBoxShadow = function($event){
		
		var parentBox =  angular.element($event.target.parentNode);
		parentBox.css("box-shadow","0px 2px 2px rgba(0, 0, 0, 0.3)");
	};

	$scope.removeBoxShadow = function($event){
		
		var parentBox =  angular.element($event.target.parentNode);
		parentBox.css("box-shadow","none");
	};

	function init() {
		
		console.log('Home Controller');
	};

	init();
}