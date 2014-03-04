angular.module('BI', ['ngRoute', 'Navigation'])

	.config(function ($routeProvider) {
		$routeProvider.when('/bi', {
			controller: 'BiController',
			templateUrl: '/bi/js/app/views/bi.html'
		});
	})

	.controller('BiController', ['$scope', 'NavigationService', function (scope, service) {
		scope.greeting = service.greeting();
	}]);
