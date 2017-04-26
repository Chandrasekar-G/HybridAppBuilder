controllers.controller(APP.CONTROLLERS.YouTubeController, YouTubeController);

YouTubeController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function YouTubeController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
