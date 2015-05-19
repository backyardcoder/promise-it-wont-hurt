/*
	Promises are designed to emaluate synchronous control flows
	If any exception is thrown, then this exception will bubble up the stack until it
	is caught by a catch block or hits the global context where it will be thrown

	// in the code below, the myFun function will throw an error and this would eliminate the 
	// execution of the doMoreFun function because the catch block will catch the exception and handle it

	function doFun() {
		// myFun is not defined and this will raise an exception;
		return myFun;
	}

	function doMoreFun() {
		return 'That was fun';
	}

	try {
		// this will throw an exception and thus all subsequent expressions will be skipped
		// and catch block will be executed
		doFun();
		// will not be executed
		doMoreFun();
	}
	catch(e) {
		console.log(e.message);
	}

	// the same can be achieved using promises as follows
	q.fcall(doFun)
	.then(doMoreFun)
	// this acts the catch block or final rejection handler
	.then(null, console.log);

	// we will have a hard time if the rejection handler or catch itself throws an error
	// in order to catch the exception from the rejection handler itself, we need to use the done() handler
	// The done is used to catch any uncaught errors

*/

var q = require('q');

function throwMyGod() {
	throw new Error('OH NOES');
}

function iterate(num) {
	console.log(num);
	return num + 1;
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);