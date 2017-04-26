controllers.controller(APP.CONTROLLERS.SpeakersController, SpeakersController);

SpeakersController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function SpeakersController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
