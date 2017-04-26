controllers.controller(APP.CONTROLLERS.MenuController, MenuController);

MenuController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', 'utils'];

function MenuController($scope, $rootScope, $state, $ionicModal, utils) {

    $scope.menuItems = [];

    function init() {
        for(component in BUILDER.COMPONENTS) {
            var item = BUILDER.COMPONENTS[component];
            if(item.ENABLED) {
                var menuItem = {
                    title : item.TITLE,
                    icon : item.ICON,
                    order : item.ORDER,
                    url : "#/app" + item.STATE.URL,
                    name : item.STATE.NAME
                };
                $scope.menuItems.push(menuItem);
            }
        }
        
        function comparator(a,b) {
            if(Number(a.order) < Number(b.order)) return -1;
            if(Number(a.order) > Number(b.order)) return 1;
            return 0;
        }
        $scope.menuItems.sort(comparator);
    };

    init();

}
