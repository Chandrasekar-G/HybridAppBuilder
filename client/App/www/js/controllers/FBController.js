controllers.controller(APP.CONTROLLERS.FBController, FBController);

FBController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function FBController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
