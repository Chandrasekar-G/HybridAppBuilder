controllers.controller(APP.CONTROLLERS.SessionsController, SessionsController);
controllers.controller(APP.CONTROLLERS.SessionDetailsController, SessionDetailsController);

SessionsController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils', '$q'];

function SessionsController($scope, $rootScope, $state, $ionicModal, utils, $q) {

    $scope.$on('$ionicView.enter', onEnter);

    $scope.getSessions = getSessions;
    $scope.SessionGroup = null;
    $scope.Presenters = null;

    function onEnter() {
        $scope.getSessions();
    };

    function getSessions() {
		var requestData = {};
        utils.showSpinner();
		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.Sessions  + BUILDER.APP_NAME.replace(/ /g,'').toLowerCase(), requestData, true)
        .then((response) => {
            deferred.resolve(response);
            $scope.SessionGroup = response[0].groups;
            $scope.Presenters = response[0].presenters;
            console.log($scope.SessionGroup);
            utils.localStorage.setObject("sessionGroup", $scope.SessionGroup);
            utils.localStorage.setObject("presenters", $scope.Presenters);
            utils.hideSpinner();
        }, (error) => {
            var message = utils.handleError(error);
            utils.hideSpinner();
            deferred.reject(message);
        });
        return deferred.promise;
	};
    onEnter();

}

SessionDetailsController.$inject = ['$scope', '$rootScope', '$state', '$stateParams','$ionicModal', '$q', 'utils'];

function SessionDetailsController($scope, $rootScope, $state, $stateParams, $ionicModal, $q, utils) {
     
     $scope.SessionGroup = null;
     $scope.Sessions = [];
     $scope.currentSession = null;
    
     function init() {
        $scope.SessionGroup = utils.localStorage.getObject("sessionGroup"); 
        $scope.Presenters = utils.localStorage.getObject("presenters");  
        for(var groupIndex in $scope.SessionGroup) {
            for(var sessionIndex in $scope.SessionGroup[groupIndex].sessions) {
                $scope.Sessions.push($scope.SessionGroup[groupIndex].sessions[sessionIndex]);
            }
        }
        $scope.currentSession = $scope.Sessions.filter(function(obj) {
            return obj.id == $stateParams.sessionId;
        });

        $scope.currentSession[0].presenterDetails = [];
        for(presenterIndex in $scope.currentSession[0].presenters) {
            $scope.currentSession[0].presenterDetails.push(
                $scope.Presenters.filter(function(obj){
                    return obj.id == $scope.currentSession[0].presenters[presenterIndex];
                })[0]
            );
        }
        $scope.currentSession = $scope.currentSession[0];
        console.log($scope.currentSession);
    };

    init();
    
};
