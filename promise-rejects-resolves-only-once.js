// if a promise is rejected or resolved then, it can not change its state
// for the lifetime. Promises implements an internal state machine to acheive this

/*
	In callback style coding, we pass a callback function as a paramter to one of the function.
	Now, this function will some time based on conditions will invoke this callback. Majority of
	the times we want the callback to be called 'once' but with bad code or overlooking. We may
	be calling our callback function more than once. This phenomenon can be avoided using promises
	because after single rejection/fulfilment of promise, all future rejection/fullfilment are ignored

	---------------- BAD CODE (CALLING THE CALLBACK TWICE!!) ---------------

	function getUser(user, cb) {
		if(user) {
			// node style of cb(err, data)
			// a return should have been placed at each invocation of cb
			cb(null, user);
		}
		return cb('No User Found', null);
	}
*/

var q = require('q');

var defer = q.defer();

// first resolve the promise and then reject
defer.resolve('I FIRED');
defer.resolve('I WILL NOT FIRED');
defer.reject('I DID NOT FIRE');

// the then handler will only be fired for the success and not for error
// because of the promise restriction to be either rejected or resolved only once
defer.promise.then(function (data) {
	console.log(data);
}, function(error) {
	console.log(error);
});
