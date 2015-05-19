/*
	 One of the key strength of promises is that they handle the promises in synchronous manner
	 which is different from the traditional callback-based code. In callback-based approach, we
	 need to stricitly handler all of our errors at every step

	 The promises helps us to write code that is remarkably similar to the try-catch block style
*/

var q = require('q');

var jsonProvided = process.argv[2];

function parsedPromise(jsonObj) {
	// create a deferred
	var defer = q.defer();

	try {
		// if the json is parsed successfully then, we will resolve the promise with parsed json string
		defer.resolve(JSON.parse(jsonObj));
	} catch(e) {
		// if some error is encountered while parsing the json, then reject the defer with error.
		defer.reject(e);
	}

	// we will always return the promise synchronously
	return defer.promise;
}

// the parsedPromise function will return a promise
// thus we are allowed to attach a then handler
parsedPromise(jsonProvided).then(console.log, console.log);