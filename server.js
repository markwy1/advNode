/*
markwy@126.com
2016.12.9
from craftsman
*/
'use strict';

var http = require('http');
var url = require('url');
var querystring = require('querystring');

console.log('Create Server ...');

http.createServer(
	function(request, response) {
		var stime=new Date().toLocaleString();
		console.log(stime + ' entering request/response event loop function ...');
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		var id = querystring.parse(query)['id'];  //?
		console.log('pathname ',pathname,'query ',query,'id ',id);
		var result = {
			'pathname': pathname,
			'id': id,
			'value': Math.floor(Math.random() * 100) 
			//floor: on the floor
			//random: return a random real number belongs [0, 1)
		};

		setTimeout( //run only once, using setInterval for repeat running
			function() {
				response.writeHead(200, {"Content-Type": "application/json"});
				response.end(JSON.stringify(result));  //?
			}, 2000 + Math.floor(Math.random() * 1000)
		);
	}
).listen(8081, 
	function() {
		console.log('Echo Server listening on port 8081 ...');
	}
);