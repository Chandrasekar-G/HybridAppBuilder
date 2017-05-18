controllers.controller(APP.CONTROLLERS.SponsorsController, SponsorsController);
controllers.controller(APP.CONTROLLERS.SponsorDetailsController, SponsorDetailsController);

SponsorsController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', '$q', 'utils'];

function SponsorsController($scope, $rootScope, $state, $ionicModal, $q, utils) {

    $scope.getSponsors = getSponsors;
    $scope.Sponsors = [];
    $scope.$on('$ionicView.enter', onEnter);

    function getSponsors() {
		var requestData = {};
        utils.showSpinner();
		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Sponsors + BUILDER.APP_NAME.replace(/ /g,'').toLowerCase(), requestData, true)
        .then((response) => {
            deferred.resolve(response);
            $scope.Sponsors = response;
            utils.localStorage.setObject("sponsors", $scope.Sponsors);
            utils.hideSpinner();
        }, (error) => {
            var message = utils.handleError(error);
            utils.hideSpinner();
            deferred.reject(message);
        });
        return deferred.promise;
	};


    function onEnter() {
        $scope.Sponsors = utils.localStorage.getObject("sponsors");
        if(!$scope.Sponsors) {
            $scope.getSponsors();
        }
    };

};

SponsorDetailsController.$inject = ['$scope', '$rootScope', '$state', '$stateParams','$ionicModal', '$q', 'utils'];

function SponsorDetailsController($scope, $rootScope, $state, $stateParams, $ionicModal, $q, utils) {
     
     $scope.Sponsors = null;
     $scope.currentSponsor = null;
    
     function init() {
        $scope.Sponsors = utils.localStorage.getObject("sponsors");   
        $scope.currentSponsor = $scope.Sponsors.filter(function(obj) {
            return obj.id == $stateParams.sponsorId;
        });
        $scope.currentSponsor = $scope.currentSponsor[0];
    };

    init();
    
};

