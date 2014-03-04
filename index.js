var http = require('http');
var stat = require('node-static');

var components = [
	{ name: 'core', port: 8081 },
	{ name: 'bi', port: 8082 }
];

components.forEach(function (c) {
	var server = new stat.Server('./components/' + c.name, { cache: false });

	http.createServer(function (req, res) {
		req.addListener('end', function () {
			server.serve(req, res);
		}).resume();
	}).listen(c.port);
	
	console.log('server ' + c.name + ' running on ' + c.port);
});

