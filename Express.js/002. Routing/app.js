const express = require('express')
const app = express();
// REST API 구현을 위해 핸들러들을 작성하도록 하자

app.post('/', (req, res) => {
    res.send('Here is POST /');
});

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    // req(Request)와 res(Response) 객체에는 정말 많은 데이터들이 담겨 있다

    res.send('Here is GET /');
});

app.listen(80, () => {
    console.log('Server is listening');
});
