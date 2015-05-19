/*
	The functions passed to the 'then' of a promise are executed on the next turn
	of the event loop
*/

var q = require('q');

var defer = q.defer();

defer.promise.then(console.log, null);

// even this looks synchronous, this will be executed in the next turn of event loop
defer.resolve('SECOND');

console.log('FIRST');