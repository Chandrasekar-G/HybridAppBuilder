var controllers = angular.module(APP.MODULES.CONTROLLERS, []);
var utils = angular.module(APP.MODULES.UTILS, []);
var messages = angular.module(APP.MODULES.MESSAGES, []);

angular.module(APP.MODULES.MAIN, ['ngRoute', APP.MODULES.ROUTES, APP.MODULES.CONTROLLERS, APP.MODULES.UTILS, APP.MODULES.MESSAGES]);