define(['app/core', '../services/bi.js'], function (core) {
	core.register.controller('BiController', function ($scope, BiService) {
		$scope.greeting = BiService.test();
	});
});
