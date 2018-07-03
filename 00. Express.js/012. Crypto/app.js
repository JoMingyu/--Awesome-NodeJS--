const crypto = require('crypto');

let plain = 'hello';

let sha = crypto.createHash('sha512').update(plain).digest('base64');
console.log(`Not Salted : ${sha}`);
// salt 없는 sha 암호화
// 동일한 plain text라면 결과값이 항상 같음

crypto.randomBytes(64, (err, buf) => {
    // salt와 같이 암호화
    // salt에 따라 결과값이 달라지므로 데이터베이스에 salt를 함께 저장해 두어야 함
    crypto.pbkdf2(plain, buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
        // text, salt, interation, key length, digest, callback 순
        console.log(`SHA : ${key.toString('base64')}`);
    });
});

const cipher = crypto.createCipher('aes-256-cbc', 'keykeykey');
let encrypted = cipher.update(plain, 'utf8', 'base64') + cipher.final('base64');
console.log(`AES Encrypted : ${encrypted}`);

const decipher = crypto.createDecipher('aes-256-cbc', 'keykeykey');
let decrypted = decipher.update(encrypted, 'base64', 'utf8') + decipher.final('utf8');
console.log(`AES Decrypted : ${decrypted}`);
