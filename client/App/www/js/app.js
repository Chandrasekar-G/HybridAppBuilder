var controllers = angular.module(APP.MODULES.CONTROLLERS, []);
var utils = angular.module(APP.MODULES.UTILS, [APP.MODULES.LOGGER, APP.MODULES.LOCAL_STORAGE, APP.MODULES.SESSION_STORAGE]);
angular.module(APP.MODULES.LOGGER, []);
angular.module(APP.MODULES.LOCAL_STORAGE, []);
angular.module(APP.MODULES.SESSION_STORAGE, []);


angular.module(APP.MODULES.MAIN, ['ionic','ion-gallery', APP.MODULES.CONTROLLERS, APP.MODULES.UTILS, APP.MODULES.LOGGER, APP.MODULES.SESSION_STORAGE, APP.MODULES.LOCAL_STORAGE])
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

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', 'ionGalleryConfigProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $ionGalleryConfigProvider) {
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
        if(item.SUB_STATE) {
          $stateProvider.state(item.SUB_STATE.NAME, {
          url: item.SUB_STATE.URL,
          views: {
            'menuContent': {
              templateUrl: item.SUB_STATE.TEMPLATEURL,
              controller : item.SUB_STATE.CONTROLLER
            }
          }
        });
        }
        if(item.HOME) {
          console.log(item);
          $urlRouterProvider.otherwise("/app" + item.STATE.URL);      
        }
      }
  }
  
  $ionGalleryConfigProvider.setGalleryConfig({
         action_label: 'Close',
         toggle: true,
         row_size: 3,
         fixed_row_size: true
  });

}]);
