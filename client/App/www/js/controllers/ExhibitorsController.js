controllers.controller(APP.CONTROLLERS.ExhibitorController, ExhibitorController);

ExhibitorController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function ExhibitorController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
