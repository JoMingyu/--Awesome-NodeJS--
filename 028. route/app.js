const express = require('express');
const app = express();

app.route('/index').get((req, res) => {
    res.status(200).send('Hello World');
}).post((req, res) => {
    res.sendStatus(204);
});

app.listen(80, () => {
    console.log('Server is listening');
});
