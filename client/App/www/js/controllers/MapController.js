controllers.controller(APP.CONTROLLERS.MapController, MapController);

MapController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function MapController($scope, $rootScope, $state, $ionicModal, utils) {
    console.log("Hii");
    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
