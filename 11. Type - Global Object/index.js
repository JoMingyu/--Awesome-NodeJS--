// Global object(전역 객체)는 런타임의 최상위 네임스페이스에 상주하고 있는 객체를 의미한다
// https://nodejs.org/api/globals.html
// 웹 브라우저의 경우엔 window, Node.js의 경우엔 global을 전역 객체를 나타내는 키워드로 사용하며
// 모든 객체는 전역 객체의 프로퍼티기 때몬에, 아래처럼 접근 가능하다
var a = 3;
console.log(global.a);

// 전역 객체로는 console, exports, global, module, process 등이 있는데, 가장 간단히 살펴볼 수 있는 전역 객체는 console이다
console.log('Hello');
console.log('Hello %s', 'PlanB', '!!');
console.warn('Danger!');