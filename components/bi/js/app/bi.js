angular.module('bi', ['ngRoute'])

	.config(function ($routeProvider) {
		$routeProvider.when('/bi', {
			controller: 'BiController',
			templateUrl: '/bi/js/app/views/bi.html'
		});
	})

	.controller('BiController', function ($scope) {
		$scope.greeting = 'Hello from BI!';
	});
