controllers.controller(APP.CONTROLLERS.LoginController, LoginController);

LoginController.$inject = ['$scope', '$q', APP.MESSAGES, 'utils'];

function LoginController($scope, $q, APP_MESSAGES, utils) {

	$scope.LoginObj = {
		userName : null,
		password : null
	};

	$scope.validUsers = {};
	
	$scope.getValidUsers = getValidUsers;


	function getValidUsers() {
		var requestData = {};

		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Credentials, requestData, true)
        .then((response) => {
            deferred.resolve(response);
			console.log(response);
			$scope.validUsers = response;
        }, (error) => {
            var message = utils.handleError(error);
            deferred.reject(message);
        });

        return deferred.promise;
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
	* Prototype Login
	* @param 
	* @return 
	*/
	$scope.loginUser = function(){
		
		var users = $scope.validUsers.data;
		for(var i = 0 ; i < users.data.length ; i++){
			if(users.data[i].userName == $scope.LoginObj.userName 
				&& users.data[i].password == $scope.LoginObj.password ){
				$scope.navigate('/home');
				break;
			}
		}
		
	};

	function init() {

		$scope.getValidUsers();
		console.log('Login Controller');
	};

	init();
}