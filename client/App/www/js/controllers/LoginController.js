controllers.controller(APP.CONTROLLERS.LoginController, LoginController);

LoginController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function LoginController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
