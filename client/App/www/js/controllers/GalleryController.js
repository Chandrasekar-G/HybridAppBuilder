controllers.controller(APP.CONTROLLERS.GalleryController, GalleryController);

GalleryController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function GalleryController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.$on('$ionicView.enter', onEnter);
    $scope.items = [
        {
            src:'img/apple.png',
            sub: 'This is a <b>subtitle</b>'
        },
        {
            src:'img/microsoft.png',
            sub: '' /* Not showed */
        },
        {
            src:'img/google.png',
            sub:''
        },
        {
            src:'img/apple.png',
            sub: 'This is a <b>subtitle</b>'
        },
        {
            src:'img/microsoft.png',
            sub: '' /* Not showed */
        },
        {
            src:'img/google.png',
            sub:''
        }
        ];
    function onEnter() {
        
    };

}
