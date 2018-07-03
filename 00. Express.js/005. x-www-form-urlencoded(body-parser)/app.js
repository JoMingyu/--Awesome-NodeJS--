const express = require('express');
const app = express();
// body 데이터 중 urlencoded, json, raw, text를 받으려면 body-parser 모듈의 도움을 받아야 한다
// npm install body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// body-parser의 미들웨어 중 하나인 urlencoded를 app에 추가
// 미들웨어 - 요청과 응답 오브젝트, 어플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수에 대한 액세스 권한을 갖는 함수
// 여기서 '그 다음의 미들웨어 함수'는 next라는 이름의 변수로 표현됨
// extended는 nested object를 받기 위해 true로 둠

app.post('/', (req, res) => {
    console.log(req.body);
    // 미들웨어로 인해 req.body에 urlencoded 데이터가 바인딩됨
    console.log(req.body.test);
    console.log(typeof(req.body.test));
    // querystring을 받았던 때처럼 리턴은 무조건 string

    res.send('Hello');
});

app.listen(80, () => {

});
