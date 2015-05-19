var qioHttp = require('q-io/http');

// url to the redis data store or some cache store
var cacheStoreUrl = 'http://localhost:7000';

// url to the db may be mongo or some other db
var dbUrl = 'http://localhost:7001/';

qioHttp.read(cacheStoreUrl)
.then(function(userId) {
	return qioHttp.read(dbUrl + userId);
})
.then(function(userJson) {
	console.log(JSON.parse(userJson))
})
.then(null, console.log)
.done();