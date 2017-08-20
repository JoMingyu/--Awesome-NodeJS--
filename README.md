# TIL-NodeJS
JIT-Compilation Language, Supports First-class function

Node.js를 공부하기 위한 repo

## Node.js에서 아마도 알고 가야 할 것들
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
