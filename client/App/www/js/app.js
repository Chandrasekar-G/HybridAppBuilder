var controllers = angular.module(APP.MODULES.CONTROLLERS, []);
var utils = angular.module(APP.MODULES.UTILS, []);
angular.module(APP.MODULES.LOGGER, []);
angular.module(APP.MODULES.LOCAL_STORAGE, []);
angular.module(APP.MODULES.SESSION_STORAGE, []);

angular.module(APP.MODULES.MAIN, ['ionic',APP.MODULES.CONTROLLERS, APP.MODULES.UTILS, APP.MODULES.LOGGER, APP.MODULES.SESSION_STORAGE, APP.MODULES.LOCAL_STORAGE])
.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    console.log($state.get());
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: APP.CONTROLLERS.MenuController
  });

  for(component in BUILDER.COMPONENTS) {
      var item = BUILDER.COMPONENTS[component];
      if(item.ENABLED) {
        $stateProvider.state(item.STATE.NAME, {
          url: item.STATE.URL,
          views: {
            'menuContent': {
              templateUrl: item.STATE.TEMPLATEURL,
              controller : item.STATE.CONTROLLER
            }
          }
        });
        if(item.HOME) {
          console.log(item);
          $urlRouterProvider.otherwise("/app" + item.STATE.URL);      
        }
      }
  }
  

}]);
