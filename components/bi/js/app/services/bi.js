define(['app/core'], function (core) {
	core.register.service('BiService', function () {
		this.test = function () {
			return 'Hello from BI!';
		};
	});
});
