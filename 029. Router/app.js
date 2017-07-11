const express = require('express');
const app = express();

app.use('/index', require('./index.js'));

app.listen(80, () => {
    console.log('Server is listening');
});
