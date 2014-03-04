angular.module('bi', ['ngRoute', 'menu'])

	.config(function ($routeProvider) {
		$routeProvider.when('/bi', {
			controller: 'BiController',
			templateUrl: '/bi/js/app/views/bi.html'
		});
	})

	.controller('BiController', ['$scope', 'MenuService', function (scope, service) {
		scope.greeting = service.greeting();
	}]);
