// npm install express
// Node.js로 웹서버에 필요한 기능을 하나하나 다 짜면 사실상 귀찮은 것들이 많다
// Node.js의 웹 프레임워크는 대표적으로 Express, Koa, Hapi 등이 있는데, 이들 중 가장 인기있는 건 Express.js다
// 가장 인기있는 만큼 StackOverflow 수많은 질문들처럼 에코시스템이 풍부하다

const express = require('express');
const app = express();

app.listen(80, () => {
    console.log('Server is listening');
});
// 아무것도 하지 않는 웹서버
// localhost에 들어가면 Cannot GET /라는 텍스트가 나타남
