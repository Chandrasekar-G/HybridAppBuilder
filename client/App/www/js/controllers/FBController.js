controllers.controller(APP.CONTROLLERS.FBController, FBController);

FBController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils', '$timeout'];

function FBController($scope, $rootScope, $state, $ionicModal, utils, $timeout) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {
        utils.showSpinner();
        $timeout(function(){
            utils.hideSpinner();
        }, 2000);
    };

}
