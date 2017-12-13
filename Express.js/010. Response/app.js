const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res 객체엔 많은 응답 객체가 있음
    /*
    * res.end() : 응답 프로세스를 종료
    * res.json() : JSON 응답을 전송(express에서 content-type=application/json 처리)
    * res.redirect() : 리다이렉트
    * res.send() : 다양한 유형의 응답 전송
    * res.sendFile() : 파일을 옥텟 스트림 형태로 전송
    * res.sendStatus() : Status Code를 리턴하며, 해당 코드를 문자열로 표현한 내용을 응답 body로 전송
    * ex) 200을 전달한다면 status code 200과 함께 응답 body는 'OK'가 됨
    *
    * res.download(), res.jsonp(), res.render()도 있음
    */
    res.status(201).send('hello');
    // status code 설정과 send를 함께
});

app.listen(80, () => {

});
