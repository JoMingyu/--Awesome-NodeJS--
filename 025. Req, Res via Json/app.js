const express = require('express');
const app = express();

app.get('/index', (req, res) => {
    let obj = JSON.parse(req.query.jsontest);
    console.log(obj.type);

    obj.type = 'response';
    res.json(obj);
});

app.listen(80, () => {
    console.log('Server is listening');
});
