define(['app/controllers/nav'], function (nav) {
	return angular
		.module('core', ['ngRoute'])
		.controller('NavController', nav);
});
