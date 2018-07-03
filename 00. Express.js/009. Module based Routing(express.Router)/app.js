const express = require('express');
const app = express();

app.use('/router', require('./module'));
// 모듈의 라우팅 핸들러들은 /router 하위에 적용됨

app.listen(80, () => {

});
