require.config({
	paths: {
		'amd': 'lib/angular/angularAMD-0.1.0',
		'angular': 'lib/angular/angular-1.2.14.min',
		'angular-route': 'lib/angular/angular-route-1.2.14.min',
		'json': 'lib/require/json-0.3.2',
		'ngload': 'lib/require/ngload-0.1.0',
		'text': 'lib/require/text-2.1.1'
	},
	shim: {
		'amd': ['angular-route'],
		'angular-route': ['angular']
	},
	map: {
		'*': {
			'angularAMD': 'amd'
		}
	},
	deps: ['init']
});
