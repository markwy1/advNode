'use strict';
// error 1: missing the path.
module.paths.push('C:/Users/Yong/AppData/Roaming/npm/node_modules');
var request = require('request');
var async = require('async');

var name, status;
var getUsername = function(callback) { 
//callback is an argument? or a mark of callback function?
	console.log('trigge getUsername...');
	request.get(
		// error 2: wrong url address.
 		'http://www.markwy.com:8081/getUserName?id=1234',
 		function(err, res, body) {
 			var result = JSON.parse(body);
 			callback(err, result.value); //callback means?
 		}
 	);
 };

 var getUserStatus = function(callback) {
 	console.log('trigge getUserStatus...');
 	request.get(
 		'http://www.markwy.com:8081/getUserStatus?id=1234',
 		function (err, res, body) {
 			var result = JSON.parse(body);
 			callback(err, result.value);
 		}
 	);
 };

 async.parallel([getUsername, getUserStatus], function(err, results) {
 	// who assigns results' value
 	console.log('The status of user', results[0], 'is', results[1]);
 });