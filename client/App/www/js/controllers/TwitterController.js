controllers.controller(APP.CONTROLLERS.TwitterController, TwitterController);

TwitterController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function TwitterController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
