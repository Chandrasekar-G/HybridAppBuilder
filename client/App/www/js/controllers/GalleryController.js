controllers.controller(APP.CONTROLLERS.GalleryController, GalleryController);

GalleryController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function GalleryController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);

    function onEnter() {};

}
