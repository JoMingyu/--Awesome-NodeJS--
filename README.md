# TIL-NodeJS
JIT-Compilation Language, Supports First-class function

Node.js를 공부하기 위한 repo

## Node.js에서 아마도 알고 가야 할 것들
0. 객체와 리스트, JSON 인터페이스와의 관계
- 웹브라우저에 alert로 띄울때와 Node.js에서 console.log를 찍을 때 객체와 리스트의 출력 결과가 달라진다
- Node.js는 내용 그대로 출력되는데 비해 Chrome에선 [Object object]가 찍혀서 삽질을 좀 했던 적이 있다
- 일단 JSON이라는 인터페이스는 문자열과 JS 기본 데이터 타입 간의 변환을 돕는다. parse(), stringify()
- 그리고 객체의 length를 찍기 위해선 Object.keys(obj).length를 쓰면 된다. length의 기준은 하나의 key:value다

1. JS의 함수는 일급함수이다.
- 일급 객체 : 변수에 담을 수 있고, 인자로 전달할 수 있고, 리턴 값으로 전달할 수 있다.(variable, parameter, return value)
- 일급 함수 : 런타임에 생성이 가능하고, 익명으로 생성이 가능하다
- 고차 함수가 가능하다는 점, JS는 함수 생성 당시 Lexical Environment를 기억하기 때문에 커링과 메모이제이션이 가능해진다는 장점이 있다
- Node.js에서 콜백지옥이 생기는 이유이기도 하다. 콜백을 잘 써먹을 수 있어야 한다

2. 모듈 개념
- exports.***와 module.exports, require에 대한 이해

3. 데이터 타입들과 변수 써먹는 능력
- Object, Array, JSON(parse, stringify)
- 동적 타이핑 언어라는 점을 계속해서 알고 있어야 한다

4. ECMAScript6
- var를 지양하고 let/const를 사용하자
- Template Literal, Substitution
- Arrow Function
- Rest 파라미터

5. Express 프레임워크
- Router에 대한 이해, 미들웨어 사용
- 클라이언트가 쉽게 사용할 수 있도록 데이터 가공
- 등등

## Modules
- npm install express
- npm install body-parser
- npm install multer
- npm install cookie-parser
- npm install express-session
- npm install mysql
- npm install crypto
- npm install node-uuid
