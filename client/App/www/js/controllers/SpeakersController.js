controllers.controller(APP.CONTROLLERS.SpeakersController, SpeakersController);

SpeakersController.$inject = ['$scope', '$rootScope', '$state','$ionicModal','$q', 'utils'];

function SpeakersController($scope, $rootScope, $state, $ionicModal, $q, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    $scope.getSpeakers = getSpeakers;
    $scope.Speakers = null;

    function onEnter() {
        $scope.getSpeakers();
    };

    function getSpeakers() {
		var requestData = {};
        utils.showSpinner();
		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Speakers, requestData, true)
        .then((response) => {
            deferred.resolve(response);
            $scope.Speakers = response;
            utils.localStorage.setObject("speakers", $scope.Sponsors);
            utils.hideSpinner();
        }, (error) => {
            var message = utils.handleError(error);
            deferred.reject(message);
            utils.hideSpinner();
        });
        return deferred.promise;
	};

    onEnter();


}
