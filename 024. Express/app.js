let express = require('express');
let app = express();

app.get('/index', function(req, res) {
    res.status(202).send('Hello');
    /*
    res.send : 데이터를 전송하고 요청을 종료

    res.end : 데이터도 함께 보낼 수 있으나 응답 프로세스를 종료한다는 의미가 강함
    Node.js 코어에서 가져옴. Express에서 요청을 빨리 끝내야 하고
    데이터를 보낼 필요가 없는 경우 이 함수를 사용할 수 있음

    res.json : JSON 형식으로 전송
    */
});

app.listen(80, function() {
    console.log('Server is listening');
});
