express = require('express');
app = express();

app.get('/', function(req, res) {
	res.send('hello')
});

app.listen(80, function() {
	console.log('Server is listening');
});
