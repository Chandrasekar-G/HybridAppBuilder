controllers.controller(APP.CONTROLLERS.SchedulesController, SchedulesController);

SchedulesController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function SchedulesController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
