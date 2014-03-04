define(['amd', 'require'], function (amd, require) {
	require(['app/core', 'json!/components.json'], function (core, components) {
		require(components.map(function (c) { return c.componentUrl; }), function () {
			amd.bootstrap(core);
		});
	});
});
