var express = require('express');
var router = express.Router();
module.exports = router;

var multer = require('multer');
var form = multer();

var mongoose = require('mongoose');
var db	 = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/test');

var accountSchema = mongoose.Schema({
	id: String,
	pw: String
});

var accountModel = mongoose.model("account", accountSchema);
new accountModel().save();

router.post('/signin', form.fields([]), (req, res) => {
	var id = req.body.id;
	var pw = req.body.pw;
	
	accountModel.find({id: id, pw: pw}, (err, docs) => {
		if(docs.length) {
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
			var ins = new accountModel({id: id, pw: pw});
			ins.save();
			
			res.sendStatus(201);
		}
	});
});
