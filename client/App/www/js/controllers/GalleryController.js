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
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Gallery + BUILDER.APP_NAME.replace(/ /g,'').toLowerCase(), requestData, true)
        .then((response) => {
            $scope.items = response;
            console.log(response);
            for(var item in $scope.items) {
                var src = $scope.items[item].src;
                $scope.items[item].src = "img/gallery/" + src;
            }
            utils.localStorage.setObject("gallery", $scope.items);
            deferred.resolve(response);
            utils.hideSpinner();
        }, (error) => {
            var message = utils.handleError(error);
            utils.hideSpinner();
            deferred.reject(message);
        });
        return deferred.promise;
	};


    function onEnter() {
       
            $scope.getItems();
        
    };

}
