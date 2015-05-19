var q = require('q');

// create a promise
var defer = q.defer();

var errorObj = {
	message: "REJECTED!"
};

// instead of creating the errorObj manually
// we can directly use
// var errorObj = new Error('REJECTED');

// reject the promise after 300 ms
setTimeout(function() {
	// manually reject a promise with the error data you want
	// this error object will be passed to the error function of the 
	//'promise.then(successHandler, errorHandler)'
	defer.reject(errorObj);
}, 300);

// associate the success and error handler to the created promise
defer.promise.then(function(promiseResult) {
	console.log(promiseResult);	
}, function(error) {
	console.log(error.message);
});

