express = require('express');
app = express();

app.get('/', (req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain', 'Test' : 10});
	// Object(key-value) type
	
	res.end('hello');
});

app.listen(80, () => {
	console.log('Server is listening');
});
