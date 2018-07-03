const express = require('express')
const app = express();

app.post('/', (req, res) => {
    console.log(req.headers.host);
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    // querystring
    
    res.send('hello');
});

app.listen(80, () => {

});
