controllers.controller(APP.CONTROLLERS.EmergencyController, EmergencyController);

EmergencyController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function EmergencyController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
