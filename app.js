var express = require('express');
var app = express();
var cookie = module.exports = require('cookie-parser');

app.use(cookie('!wo.2#ksd)@'));
app.use('/', require('./rest_modules/account'));
app.use('/', require('./rest_modules/post'));

app.listen(80, () => {
	console.log('Server is listening');
});
