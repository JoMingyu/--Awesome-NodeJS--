var express = require('express');
var router = express.Router();
module.exports = router;

var multer = require('multer');
var form = multer();
var cookie = require('../app');

var mongoose = require('mongoose');
var db	 = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/test');

var accountSchema = mongoose.Schema({
	id: String,
	pw: String,
	session_id: String
});

var accountModel = mongoose.model("account", accountSchema);
new accountModel().save();

router.post('/signin', form.fields([]), (req, res) => {
	var id = req.body.id;
	var pw = req.body.pw;
	
	accountModel.find({id: id, pw: pw}, (err, docs) => {
		if(docs.length) {
			var sessionId = guid();
			accountModel.update({id: id}, {$set:{session_id: sessionId}});
			res.cookie('cookie', sessionId, {signed: true});
			res.sendStatus(201);
		} else {
			res.sendStatus(204);
		}
	});
});

router.post('/signup', form.fields([]) , (req, res) => {
	var id = req.body.id;
	var pw = req.body.pw;
	
	accountModel.find({id: id}, (err, docs) => {
		if(docs.length) {
			res.sendStatus(204);
		} else {
			var instance = new accountModel({id: id, pw: pw});
			instance.save();
			
			res.sendStatus(201);
		}
	});
});

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
