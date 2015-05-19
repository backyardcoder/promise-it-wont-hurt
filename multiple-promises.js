/*
	
	While performing asynchronous programming we may want to perform certain async operations in parallel
	Or, in some cases we may wish to delay some further processing untill a list of async operations have
	been completed.

*/

var q = require('q');

// create two defer objects such that, both of them should be completed to executed the final promise
var deferOne = q.defer();
var deferTwo = q.defer();

function all(promiseOne, promiseTwo) {
	var count = 0;
	var resolvedDataArr = [];
	var combinedDefer = q.defer();

	// on resolution increment the counter
	promiseOne.then(function(data) {
		++count;
		resolvedDataArr.push(data);

		// not sure in real world which promise will be resolved first
		// thus put the same check in both places. Good thing, promises can
		// be resolved or rejected only once.
		if(count === 2) {
			combinedDefer.resolve(resolvedDataArr);
		}

	}, function(error) {
		combinedDefer.reject(error);
	});

	promiseTwo.then(function(data) {
		++count;
		resolvedDataArr.push(data);

		if(count === 2) {
			combinedDefer.resolve(resolvedDataArr);
		}

	}, function(error) {
		combinedDefer.reject(error);
	});

	// return the combined deffered promise object
	return combinedDefer.promise;
}

// attach the then handler to the combined promise object here
all(deferOne.promise, deferTwo.promise)
.then(console.log, console.log)
.then(null, console.log)
.done();

// resolve the two promises after 200 ms
setTimeout(function() {
	deferOne.resolve('PROMISES');
	deferTwo.resolve('FTW');
}, 200);