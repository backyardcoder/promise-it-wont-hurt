/*
	We never return a promise rather, the promise fulfillment handlers will either return a
	promise or value. A return value may be wrapped in a promise if need be.

	The key thing to understand is that even if return values are obtained synchronously then, also
	the handlers will wrap them in promises. Also, the returned value will be resolved on the next turn
	of the event loop
*/

var q = require('q');
var defer = q.defer();

function attachTitle(name) {
	return 'DR. ' + name;
}

// Creating a promise chain that first calls the attachTitle function
// which will return a value synchronously, which will in turn be wrapped into
// a promise by the library itself. Now, this will invoke the second fulfillment
// handler in the chain i.e. console.log
defer.promise
.then(attachTitle, null)
.then(console.log, null);

defer.resolve('MANHATTAN');