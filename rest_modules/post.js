var express = require('express');
var router = express.Router();
module.exports = router;

var multer = require('multer');
var form = multer();
var cookie = require('../app');

var mongoose = require('mongoose');
var db	 = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/test');

var postSchema = mongoose.Schema({
	title: String,
	content: String,
	owner: String
});

var postModel = mongoose.model('post', postSchema);
new postModel().save();

router.post('/post', form.fields([]), (req, res) => {
	var title = req.body.title;
	var content = req.body.content;
	var owner = getIdFromCookie();
});

function getIdFromCookie() {
	var accountModel = mongoose.model('account');
	accountModel.find({})
}
