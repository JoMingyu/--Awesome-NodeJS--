var express = require('express');
var app = express();
var another = require('./another');
var another2 = require('./another2');

console.log(another.exp(3));
console.log(another2().key(2));

app.get('/', (req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain', 'Test' : 10});
	// Object(key-value) type
	
	res.end('hello');
});

app.listen(80, () => {
	console.log('Server is listening');
});
