controllers.controller(APP.CONTROLLERS.BreakoutsController, BreakoutsController);

BreakoutsController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function BreakoutsController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
