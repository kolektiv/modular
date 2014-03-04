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

	angular.module('Core', [].concat(deps.map (function (d) { return d.name })));	
		
	angular.module('Navigation', [])

		.controller('NavigationController', function ($scope) {
			$scope.greeting = 'Hello from Navigation!';
			$scope.template = '/js/app/views/nav.html';
		})

		.service('NavigationService', function () {
			this.greeting = function () {
				return 'Hello! From the Navigation Service...';
			};
		});

	deps.forEach(loadDependency);
	
})();
