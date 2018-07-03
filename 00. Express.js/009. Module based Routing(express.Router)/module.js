const router = require('express').Router()
// express.Router 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있음
// Router 인스턴스는 완전한 미들웨어이자 라우팅 시스템

router.route('/').get((req, res) => {
    res.send('Here is GET /');
}).post((req, res) => {
    res.send('Here is POST /');
}).put((req, res) => {
    res.send('Here is PUT /');
});

module.exports = router;
