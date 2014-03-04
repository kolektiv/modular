(function () {
	
	var deps = [
		{ 
			name: 'bi', 
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
			angular.bootstrap(document, ['core']);
		}
	};

	angular.module('core', ['ngRoute'].concat(deps.map (function (d) { return d.name })))
	
		.controller('NavController', function ($scope) {
			$scope.greeting = 'Hello from Nav!';
			$scope.template = '/js/app/views/nav.html';
		});

	deps.forEach(loadDependency);
	
})();
