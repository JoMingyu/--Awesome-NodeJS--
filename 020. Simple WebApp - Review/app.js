var http = require('http');

http.createServer((req, res) => {
  // Arrow function과 콜백
  // 요청이 들어오면 콜백 함수로 분기되는 구조인 것 같음

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello');
  // Response 객체의 메소드
}).listen(808, '127.0.0.1', () => {
  // Arrow function과 콜백
  // 서버가 성공적으로 listen 상태가 되면 콜백 함수로 분기

  console.log('Listening');
});
