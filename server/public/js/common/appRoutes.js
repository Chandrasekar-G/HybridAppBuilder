angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/template', {
			templateUrl: 'views/template.html',
			controller: 'TemplateController'
		})

		.when('/appBuilder', {
			templateUrl: 'views/appBuilder.html',
			controller: 'AppBuilderController'
		})

	$locationProvider.html5Mode(true);
}]);