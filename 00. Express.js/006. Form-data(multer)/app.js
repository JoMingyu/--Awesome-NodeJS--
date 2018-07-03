const express = require('express');
const app = express();

const multer = require('multer');
const form = multer();
// 원래 form 형식은 파일 업로드를 위해 사용하는데, field들을 받기 위해서도 사용할 수 있다

app.post('/', form.fields([]), (req, res) => {
    console.log(req.body);
    console.log(req.body.test);

    res.send('Hello');
});

app.listen(80, () => {
    
});
