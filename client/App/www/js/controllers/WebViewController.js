controllers.controller(APP.CONTROLLERS.WebViewController, WebViewController);

WebViewController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function WebViewController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}