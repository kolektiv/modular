define(['amd', 'app/core'], function (amd, core) {
	core.config(function ($routeProvider) {
		$routeProvider.when('/bi', amd.route({
			controller: 'BiController',
			controllerUrl: '/bi/js/app/controllers/bi.js',
			templateUrl: '/bi/js/app/views/bi.html'
		}));
	});
});
