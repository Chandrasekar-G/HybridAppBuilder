controllers.controller(APP.CONTROLLERS.EventsController, EventsController);

EventsController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function EventsController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
