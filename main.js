var express = require('express');
var app = express();

app.use('/', require('./rest_modules/account'));

app.listen(80, () => {
	console.log('Server is listening');
});
