define(['amd', 'app/core'], function (amd, core) {
	core.config(function ($routeProvider) {
		$routeProvider.when('/menu', amd.route({
			controller: 'MenuController',
			controllerUrl: '/menu/js/app/controllers/menu.js',
			templateUrl: '/menu/js/app/views/menu.html'
		}));
	});
});
