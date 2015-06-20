describe("Contacts Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";

	describe("hello world", function(){

		    
		    request.get(contacts_url, function(error, response, body))

	});
}