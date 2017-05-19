var controllers = angular.module(APP.MODULES.CONTROLLERS, ['ngAnimate', 'toaster']);
var directive = angular.module(APP.MODULES.DIRECTIVES, []);
var utils = angular.module(APP.MODULES.UTILS, []);
var messages = angular.module(APP.MODULES.MESSAGES, []);
var draganddrop = angular.module(APP.MODULES.DRAGANDDROP, ['mb-dragToReorder']);

angular.module(APP.MODULES.MAIN, ['ngRoute', APP.MODULES.ROUTES, APP.MODULES.CONTROLLERS, APP.MODULES.UTILS, APP.MODULES.MESSAGES, APP.MODULES.DIRECTIVES,APP.MODULES.DRAGANDDROP]);