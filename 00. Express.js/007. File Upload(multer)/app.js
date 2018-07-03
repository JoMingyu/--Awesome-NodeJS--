const express = require('express');
const app = express();

const multer = require('multer');
// multer를 사용하는 이유인 파일 업로드를 다뤄 보도록 하자
// const upload = multer({dest: 'uploads/'});
// 위처럼 multer 객체를 생성할 수도 있지만, diskStorage를 사용하는 편이 좋다
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // 파일 저장 디렉토리 설정
        cb(null, 'uploads/');
        // 해당 디렉토리가 없으면 Status code 500이 반환되므로 미리 만들어 두자
    },
    filename: (req, file, cb) => {
        // 파일 이름 설정
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

app.post('/', upload.single('test'), (req, res) => {
    res.send(`Received ${req.file.filename}`);
});

app.listen(80, () => {

});
