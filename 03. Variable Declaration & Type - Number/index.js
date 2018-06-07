var n = 3;
// 변수는 var 키워드로 선언한다
// 타입 추론과 동적 타이핑을 지원하므로, 이미 선언된 변수에 다른 타입의 리터럴을 할당할 수 있다
n = '123';

console.log(3);
console.log(3.4);
// Node.js에서 숫자 타입은 그 종류(정수, 실수 등)에 관계 없이 Number라는 객체로 wrapping된다