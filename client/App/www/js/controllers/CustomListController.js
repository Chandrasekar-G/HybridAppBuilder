controllers.controller(APP.CONTROLLERS.ListController, ListController);

ListController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function ListController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
