const http = require('http');
// http 모듈

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => { // Arrow function
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Set header : content-type: text/plain
  res.end('Hello\n');
  // Response 'Hello World'
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
