const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    secret: '@k..1!!sssS',
    resave: false,
    // 세션을 언제나 저장할지
    saveUninitialized: true
    // 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장
}));

app.post('/index', (req, res) => {
    console.log(req.session.test);
    console.log(req.session.test2);

    req.session.test = 'hello';
    req.session.test2 = 'he';

    res.sendStatus(201);
});

app.listen(80, () => {
    console.log('Server is listening');
});
