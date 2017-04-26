controllers.controller(APP.CONTROLLERS.LoginController, LoginController);

LoginController.$inject = ['$scope', '$q', APP.MESSAGES, 'utils'];

function LoginController($scope, $q, APP_MESSAGES, utils) {

	$scope.LoginObj = {
		userName : null,
		password : null
	};
	
	$scope.getValidUsers = getValidUsers;


	function getValidUsers() {
		var requestData = {};

		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Credentials, requestData, true)
        .then((response) => {
            deferred.resolve(response);
			console.log(response);
        }, (error) => {
            var message = utils.handleError(error);
            deferred.reject(message);
        });

        return deferred.promise;
	};

	function init() {
		var a = $scope.getValidUsers();
		console.log('Login Controller');
	};

	init();
}