var q = require('q');

// create a promise
var defer = q.defer();

var promiseResult = "RESOLVED!";

// resolve the promise after 300 ms
setTimeout(function() {
	// manually resolve a promise with the data you want to send
	// this data will be passed to the success function of the 'promise.then(successHandler, errorHandler)'
	defer.resolve(promiseResult);
}, 300);

// associate the success and error handler to the created promise
defer.promise.then(function(promiseResult) {
	console.log(promiseResult);	
}, function(error) {
	console.log("Some error has occured: " + error);
});

