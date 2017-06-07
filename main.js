var express		= require('express');
var app				= express();
var mongoose	= require('mongoose');
var db					= mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
	console.log("Connected");
});
mongoose.connect('mongodb://localhost:27017/test');

app.use('/account', require('./rest_modules/account'))

app.listen(80, () => {
	console.log('Server is listening');
});
