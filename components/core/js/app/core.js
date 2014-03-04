(function () {
	
	var deps = [
		{ 
			name: 'BI', 
			url: '/bi/js/app/bi.js'
		}
	];

	var dependenciesLoaded = 0;

	var loadDependency = function (dep) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = dep.url;
		script.onload = onDependencyLoaded;
		
		(document.getElementsByTagName('head')[0]).appendChild(script);
	};

	var onDependencyLoaded = function () {
		dependenciesLoaded += 1;

		if (dependenciesLoaded == deps.length) {
			angular.bootstrap(document, ['Core']);
		}
	};

	angular.module('Core', ['ngRoute'].concat(deps.map (function (d) { return d.name })))
	
		.config(function ($locationProvider) {
			$locationProvider.html5Mode(true);
			console.log('core config');
		});
		
	angular.module('Navigation', [])

		.controller('NavigationController', function ($scope, NavigationFactory) {
			$scope.registry = NavigationFactory.view();
			$scope.greeting = 'Navigation';
			$scope.template = '/js/app/views/nav.html';
		})

		.factory('NavigationFactory', function () {
			var registry = [{ name: 'test' }];

			return {
				register: function (name) {
					registry.push({
						name: name
					});
				},
				view: function () {
					return registry;
				}
			};
		});

	deps.forEach(loadDependency);
	
})();
