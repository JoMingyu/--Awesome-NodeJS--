var express = require('express');
var router = express.Router();

var multer = require('multer');
var form = multer();

module.exports = router;

router.get('/', (req, res) => {
	console.log(req.query.test);
});

router.post('/', form.fields([]) , (req, res) => {
	console.log(req.body);
});
