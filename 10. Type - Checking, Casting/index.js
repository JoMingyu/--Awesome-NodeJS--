// 타입 체크는 'typeof'라는 연산자를 사용한다
console.log(typeof 1);
// 'number'
console.log(typeof '');
// 'string'
console.log(typeof [1]);
// 'object'

// 캐스팅은 각 타입의 wrapper를 사용한다
console.log(String(1));
// '1'
console.log(String(true));
// true

console.log(Number('3.5'));
// 3.5
console.log(Number('qwe'));
// NaN
// 숫자로 캐스팅 불가능한 경우 NaN이 할당

console.log(Boolean(''));
// false
console.log(Boolean(null));
// false
console.log(Boolean([]));
// true