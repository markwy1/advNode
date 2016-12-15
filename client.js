/*
markwy@126.com
2016.12.9
from craftsman
*/

'use strict';

//if the module request is not found, add the following statement.
module.paths.push('C:/Users/Yong/AppData/Roaming/npm/node_modules');
var request = require('request');
request.get(
	'http://www.markwy.com:8081/getUserName?id=1234',
	function(err, res, body) {
		var result = JSON.parse(body);
		console.log(result);
		var id = result.id;
		console.log('name id: ', id);

		request.get(
			'http://www.markwy.com:8081/getUserStatus?id=1234',
			function(err, res, body) {
				var result = JSON.parse(body);
				var status = result.value;
				console.log('The status of user', id, 'is', status);
			}
		);

	}
);