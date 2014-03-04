angular.module('BI', ['ngRoute', 'Navigation'])

	.config(function ($routeProvider) {
		$routeProvider.when('/bi', {
			controller: 'BiController',
			templateUrl: '/bi/js/app/views/bi.html'
		});
	})

	.run(function (NavigationFactory) {
		NavigationFactory.register('Business Intelligence');
	})

	.controller('BiController', ['$scope', function (scope) {
		scope.greeting = 'Hello from BI!';
	}]);
