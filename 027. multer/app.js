const express = require('express');
const app = express();

const multer = require('multer');
const form = multer();

app.post('/form', form.fields([]), (req, res) => {
    res.send(`Received ${req.body.test_form}`);
});

app.listen(80, () => {
    console.log('Server is listening');
});
