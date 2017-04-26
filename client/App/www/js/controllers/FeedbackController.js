controllers.controller(APP.CONTROLLERS.FeedbackController, FeedbackController);

FeedbackController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function FeedbackController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
