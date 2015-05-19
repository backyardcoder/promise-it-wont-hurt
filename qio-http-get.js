// require the http module from q-io
var qioHttp = require('q-io/http');

// call the read function which will return a promise object on completion of the
// get request. Now, we can parse the data received from the get request. The actual data
// is a buffer
qioHttp.read('http://localhost:1337')
.then(function(data) {
	console.log(JSON.parse(data));
})
.then(null, console.log)
.done();