/*
	 One of the key strength of promises is that they handle the promises in synchronous manner
	 which is different from the traditional callback-based code. In callback-based approach, we
	 need to stricitly handler all of our errors at every step

	 The promises helps us to write code that is remarkably similar to the try-catch block style
*/

var q = require('q');

var jsonProvided = process.argv[2];

// we can wrap a synchronous function or value in a promise by using q.fcall
function parsedPromise(jsonObj) {
	return JSON.parse(jsonObj);
}

// We want the the value return by the parsedPromise function in a promise
// then we are allowed to use q.fcall function. This is useful when we have
// synchronous function in our promise chain that are not promise aware
q.fcall(parsedPromise,jsonProvided).then(console.log, console.log);