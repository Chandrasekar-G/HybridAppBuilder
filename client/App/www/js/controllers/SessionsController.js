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
            
            var sessionGroups = [];
            var time = "";
            for(index in response) {
                var localTime = response[index].time;
                if(localTime == time) {
                    response[index].time = null;
                } else {
                    time = response[index].time;
                }
            }
            console.log(response);
            $scope.Sessions = response;
            utils.localStorage.setObject("sessions", $scope.Sessions);
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
        $scope.Sessions = utils.localStorage.getObject("sessions"); 
        $scope.currentSession = $scope.Sessions.filter(function(obj) {
            return obj.id == $stateParams.sessionId;
        });
       
        $scope.currentSession = $scope.currentSession[0];
        console.log($scope.currentSession);
    };

    init();
    
};
