controllers.controller(APP.CONTROLLERS.SponsorsController, SponsorsController);

SponsorsController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function SponsorsController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
