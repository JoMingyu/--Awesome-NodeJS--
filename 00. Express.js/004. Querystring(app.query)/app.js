const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.query.test);
    console.log(typeof(req.query.test));
    // 요청의 querystring은 타 라이브러리 지원 없이도 접근 가능하다
    // 결과값은 무조건 string이므로 필요하다면 캐스팅 과정을 포함해야 한다

    res.send('hello');
});

app.listen(80, () => {

});
