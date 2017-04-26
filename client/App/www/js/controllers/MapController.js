controllers.controller(APP.CONTROLLERS.MapController, MapController);

MapController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function MapController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
