const crypto = require('crypto');

let plain = 'hello';

let sha = crypto.createHash('sha512').update(plain).digest('base64');
crypto.randomBytes(64, (err, buf) => {
    // salt와 같이 암호화
    crypto.pbkdf2(plain, buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
        console.log('SHA : ' + key.toString('base64'));
    });
});

const cipher = crypto.createCipher('aes-256-cbc', 'keykeykey');
let result = cipher.update(plain, 'utf8', 'base64') + cipher.final('base64');
console.log('AES : ' + result);
