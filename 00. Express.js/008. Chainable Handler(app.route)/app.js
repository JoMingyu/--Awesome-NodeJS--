const express = require('express');
const app = express();

// app.route()를 이용하면 라우트 경로에 대하여 체인 가능한 핸들러를 작성할 수 있음
app.route('/')
.get((req, res) => {
    res.send('Here is GET /');
})
.post((req, res) => {
    res.send('Here is POST /');
})
.put((req, res) => {
    res.send('Here is PUT /');
});

app.listen(80, () => {

});
