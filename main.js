var express = require('express');
var app = express();

app.use('/account', require('./account'))

app.listen(80, () => {
	console.log('Server is listening');
});
