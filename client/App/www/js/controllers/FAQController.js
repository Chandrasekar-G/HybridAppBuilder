controllers.controller(APP.CONTROLLERS.FAQController, FAQController);

FAQController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function FAQController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
