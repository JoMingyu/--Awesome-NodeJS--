const express = require('express');
const app = express();

const form = require('multer')();

app.post('/index', form.fields([]), (req, res) => {
    console.log(req.body.key);
    res.sendStatus(201);
});

app.listen(80, () => {
    console.log('Server is listening');
});
