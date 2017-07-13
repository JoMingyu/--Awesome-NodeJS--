const express = require('express');
const app = express();

const multer = require('multer');
const storage = multer.diskStorage({
    // post 요청의 파일 처리를 위한 엔진
    destination : (req, file, cb) => {
        // request, file, 콜백

        cb(null, 'uploads/');
        // cb 콜백함수를 이용해 파일 저장 디렉토리 설정
    },

    filename : (req, file, cb) => {
        cb(null, file.originalname);
        // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
});

const upload = multer({ storage : storage });
// storage 프로퍼티를 이용해 diskstorage 객체 설정

app.post('/form', upload.single('test_form'), (req, res) => {
    res.send(`Received ${req.file}`);
});

app.listen(80, () => {
    console.log('Server is listening');
});