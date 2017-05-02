controllers.controller(APP.CONTROLLERS.GalleryController, GalleryController);

GalleryController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils', '$q'];

function GalleryController($scope, $rootScope, $state, $ionicModal, utils, $q) {

    $scope.$on('$ionicView.enter', onEnter);
    $scope.getItems = getItems;
    $scope.items = [];

    function getItems() {
		var requestData = {};
        utils.showSpinner();
		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Gallery, requestData, true)
        .then((response) => {
            deferred.resolve(response);
            $scope.items = response;
            utils.localStorage.setObject("gallery", $scope.items);
            console.log($scope.items);
        }, (error) => {
            var message = utils.handleError(error);
            deferred.reject(message);
        });
        utils.hideSpinner();
        return deferred.promise;
	};


    function onEnter() {
        $scope.items = utils.localStorage.getObject("gallery");
        if(!$scope.items) {
            $scope.getItems();
        }
    };

}
