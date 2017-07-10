const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// extended는 모든 객체를 파싱할 수 있도록 하는 프로퍼티
// parameterLimit이라는 프로퍼티도 설정해둘 수 있음

// bodyParser의 함수는 json, raw, text, urlencoded가 있음
app.post('/index', (req, res) => {
    let requestVal = req.body.test;
    console.log(requestVal);

    res.send(`Received ${requestVal}`);
});

app.listen(80, () => {
    console.log('Server is listening');
});
